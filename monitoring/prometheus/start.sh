#!/bin/sh

nginx

/prometheus --config.file=/etc/prometheus/prometheus.yml --storage.tsdb.path=/prometheus --web.route-prefix=/prometheus
