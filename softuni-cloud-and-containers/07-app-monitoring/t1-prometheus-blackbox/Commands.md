1. Install and run Blackbox Exporter
2. Via Docker -> `docker run -p 9115:9115 quay.io/prometheus/blackbox-exporter`
3. Install Blackbox Exporter
4. `cd` into the respective directory
5. `blackbox_exporter.exe`
6. check `localhost:9115/probe?target=https://softuni.org`
7. Confirm metrics are being shown and updated upon refresh
8. Create Prometheus via a new `yml` file -> `Prometheus.yml`
9. Validate the `yaml` configuration via any web validator
10. Run Prometheus using the custom `yml` configuration -> `prometheus.exe --config.file=prometheus.yml`
11. Go to `localhost:9090` and confirm Prometheus is running and ready for queries
12. Check `probe_http_duration_seconds` to view the response metrics
13. All other metrics can be viewed the same way and their string names are available in the preview, resulting from step 6
