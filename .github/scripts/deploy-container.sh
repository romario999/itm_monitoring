#!/bin/bash
set -e

# Checking all env variables
variables=("REPO" "MICROSERVICE_NAME" "IMAGE_TAG" "INSTANCE_ID" "CONTAINER_NAME" "PORT" "DOCKER_USERNAME" "DOCKER_PASSWORD")

for var in "${variables[@]}"; do
  if [ -z "${!var}" ]; then
    echo "::error::Missing required environment variable: $var"
    exit 1
  fi
done

IMAGE_NAME="${REPO}:${IMAGE_TAG}"
echo "Using Docker image: ${IMAGE_NAME}"


EXTRA_ENV=""
DB_PORT=${DB_PORT:-5432}

if [[ "$MICROSERVICE_NAME" == "dotnet" ]]; then
  echo "Fetching DB credentials dynamically from AWS Secrets Manager..."
  RDS_IDENTIFIER=$(aws rds describe-db-instances --query "DBInstances[0].DBInstanceIdentifier" --output text)
  if [ -z "$RDS_IDENTIFIER" ]; then
    echo "::error::Unable to fetch RDS instance identifier."
    exit 1
  fi
  DB_HOST=$(aws rds describe-db-instances --db-instance-identifier "$RDS_IDENTIFIER" --query "DBInstances[0].Endpoint.Address" --output text)
  SECRET_ID=$(aws secretsmanager list-secrets --query "SecretList[?contains(Name,'rds!db')].Name" --output text | head -n1)
  DB_CREDENTIALS=$(aws secretsmanager get-secret-value --secret-id "$SECRET_ID" --query SecretString --output text)
  DB_USER=$(echo "$DB_CREDENTIALS" | jq -r '.username')
  DB_PASSWORD=$(echo "$DB_CREDENTIALS" | jq -r '.password')
  DB_NAME="itm"  
  CONNECTIONSTRING="Host=${DB_HOST};Port=${DB_PORT};Database=${DB_NAME};Username=${DB_USER};Password=${DB_PASSWORD};"
  EXTRA_ENV="-e ASPNETCORE_ENVIRONMENT=Development -e ConnectionStrings__DbConnectionString=\"$CONNECTIONSTRING\""
elif [[ "$MICROSERVICE_NAME" == "angular" || "$MICROSERVICE_NAME" == "react" ]]; then
  EXTRA_ENV="-e API_URL=http://backend"
elif [[ "$MICROSERVICE_NAME" == "prometheus" || "$MICROSERVICE_NAME" == "grafana" ]]; then
  EXTRA_ENV=""  # для Prometheus та Grafana додаткові env змінні не потрібні
else
  echo "::error::Unknown MICROSERVICE_NAME: ${MICROSERVICE_NAME}"
  exit 1
fi


# Deploy main container via SSM
# Deploy main container via SSM
COMMAND_ID=$(aws ssm send-command \
  --instance-ids "${INSTANCE_ID}" \
  --document-name "AWS-RunShellScript" \
  --parameters "commands=[
    'echo \"Logging in to Docker registry...\"',
    'echo \"${DOCKER_PASSWORD}\" | docker login -u ${DOCKER_USERNAME} --password-stdin',
    'echo \"Deploying ${MICROSERVICE_NAME} container...\"',
    'docker container rm -f ${CONTAINER_NAME} || true',
    'docker image prune -f',
    'docker pull ${IMAGE_NAME}',
    'docker run -d --name ${CONTAINER_NAME} -p 80:${PORT} ${EXTRA_ENV} --restart always ${IMAGE_NAME}',
    'docker ps -f name=${CONTAINER_NAME}',
    'sleep 3',
    'docker logs ${CONTAINER_NAME} --tail 20',
    'if [ \"$MICROSERVICE_NAME\" != \"grafana\" ] && [ \"$MICROSERVICE_NAME\" != \"prometheus\" ]; then',
    'docker container rm -f monitoring-exporter || true',
    'docker pull prom/node-exporter:latest',
    'docker run -d --name monitoring-exporter --restart always -p 9100:9100 prom/node-exporter:latest',
    'echo \"Monitoring exporter started on port 9100\"',
    'fi'
  ]" \
  --query "Command.CommandId" \
  --output text)

sleep 5

echo "Command ID: $COMMAND_ID"
echo "Waiting for deployment to complete..."

for i in {1..12}; do
  STATUS=$(aws ssm get-command-invocation \
    --command-id "$COMMAND_ID" \
    --instance-id "${INSTANCE_ID}" \
    --query "Status" \
    --output text 2>/dev/null || echo "Pending")
  echo "Deployment status: $STATUS"
  if [ "$STATUS" == "Success" ]; then break; fi
  if [[ "$STATUS" == "Failed" || "$STATUS" == "Cancelled" || "$STATUS" == "TimedOut" ]]; then
    echo "::error::Deployment failed with status: $STATUS"
    aws ssm get-command-invocation --command-id "$COMMAND_ID" --instance-id "${INSTANCE_ID}" --query "StandardErrorContent" --output text
    exit 1
  fi
  sleep 10
done

OUTPUT=$(aws ssm get-command-invocation --command-id "$COMMAND_ID" --instance-id "${INSTANCE_ID}" --query "StandardOutputContent" --output text)
echo "Deployment output:"
echo "$OUTPUT"