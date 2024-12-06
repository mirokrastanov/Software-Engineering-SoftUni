1. Install Grafana and access it on port `3000` (unless configured differently)
    - To change the default port -> `<install dir>/conf/defaults.ini` -> Search for `http port`
2. Login with credentials -> `admin` / `admin`
3. Adjust credentials
4. Create a new connection -> `localhost:3000` -> Connections -> Add new connection -> Prometheus -> Add new data source -> Name -> Prometheus URL (most likely `localhost:9090`) -> Save & Test
5. Create a new dashboard -> `localhost:3000` -> Dashboards -> New -> New Dashboard -> Add Visualization -> Select the previously created data connection as a data source (Prometheus)
6. Configure what to track -> Time Series (left panel) -> Metric `probe_http_duration_seconds` (bottom panel) -> Run queueries
7. Save Dashboard
8. Repeat for -> Metric `probe_http_status_code` -> But instead of Time Series (left panel) -> Select Gauge
9. Save Dashboard
10. Repeat for -> Metric `prove_http_duration_seconds` -> This time -> Histogram
11. Save Dashboard
12. To get the information of any panel in a `JSON` format -> `RMB` on any dashboard's hamburger menu -> Inspect -> Panel JSON
