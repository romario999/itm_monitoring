################################################################################
# General
################################################################################

aws_region = "eu-central-1"
az_letter  = "a"
tags = {
  owner = "terraform"
}

################################################################################
# VPC variables
################################################################################

vpc_cidr = "10.0.0.0/16"
vpc_name = "test"
subnets = {
  subnet0 = {
    cidr_block = "10.0.1.0/24"
    public     = true
    az_index   = 0
  },
  subnet1 = {
    cidr_block = "10.0.2.0/24"
    public     = true
    az_index   = 1
  },
  subnet2 = {
    cidr_block = "10.0.3.0/24"
    public     = false
    az_index   = 0
  }
  subnet3 = {
    cidr_block = "10.0.4.0/24"
    public     = false
    az_index   = 1
  }

}

###############################################
# Security Groups variables and ALB variables
###############################################

name_prefix       = "app"
project_name      = "app"
alb_ingress_cidr  = ["0.0.0.0/0"]
alb_ingress_ports = [80]
web_backend_port  = 8080
web_ui_port       = 80
prometheus_port   = 9090
grafana_port      = 3001

################################################################################
# EC2 configuration
################################################################################
#Amazon Linux 2023 AMI 2023.8.20250808.1 x86_64 HVM kernel-6.1 in eu-central-1

ami          = "ami-015cbce10f839bd0c"
ec2_name_set = ["react", "angular", "dotnet", "prometheus", "grafana"]
subnet       = ""
sgs          = []
iam_role_policies = {
  AdministratorAccess = "arn:aws:iam::aws:policy/AdministratorAccess",
  SSM                 = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

################################################################################
# RDS variables
################################################################################

rds_port             = 5432
db_id                = "postgres-db"
db_username          = "postgres"
db_engine            = "postgres"
db_engine_version    = "17.5"
db_instance_class    = "db.t3.micro"
db_subnet_group_name = "rds-private-subnet-group"