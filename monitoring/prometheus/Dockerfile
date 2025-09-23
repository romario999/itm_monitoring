FROM prom/prometheus:latest

WORKDIR /prometheus

COPY prometheus.yml /etc/prometheus/prometheus.yml
COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh /start.sh

VOLUME [ "/prometheus" ]

EXPOSE 9090 80

# запускаємо скрипт через shell
CMD ["/bin/sh", "/start.sh"]
