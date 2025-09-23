FROM prom/prometheus:latest

COPY prometheus.yml /etc/prometheus/prometheus.yml

COPY nginx.conf /etc/nginx/nginx.conf

VOLUME [ "/prometheus" ]

EXPOSE 9090 80

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]