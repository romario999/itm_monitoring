FROM grafana/grafana:latest

COPY grafana.ini /etc/grafana/grafana.ini
COPY provisioning/ /etc/grafana/provisioning/
COPY dashboards/ /etc/grafana/provisioning/dashboards/ 

VOLUME ["/var/lib/grafana"]

EXPOSE 3001
