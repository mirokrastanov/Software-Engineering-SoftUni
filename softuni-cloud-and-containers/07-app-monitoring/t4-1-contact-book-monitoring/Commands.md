1. `cd` into project folder
2. `npm i`
3. `npm run start`
4. Confirm app is running on `localhost:8080`
5. Install the Prometheus client for node.js -> `npm i prom-client`
6. Edit the `mvc-controller.js` file and incorporate the `prom-client` library into the controller
7. Add the endpoint `/metrics` which would be used to display metrics for the app
8. Export custom metrics for `http_request_duration_seconds` (additional metrics can be added/chosen)
9. Add monitoring to `/contacts/create` endpoint as well
10. Results for any monitored endpoint will be displayed on the `/metrics` endpoint too
11. After this is done -> Prometheus setup
12. Configure Prometheus to monitor the app -> `prometheus-contact-book.yml`
14. Run Prometheus -> `prometheus.exe --config.file=prometheus-contact-book.yml`
15. Check the `http_request_duration_seconds_bucket` metric in Prometheus GUI on port `9090`
16. Prometheus should now properly display the metrics for the app