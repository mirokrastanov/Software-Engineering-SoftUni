1. Create a `docker-compose.yml` file using the `Dockerfile` generated for the TaskBoard App
2. Define the `sqlserver` configuration
    - Name
    - Image -> `mcr.microsoft.com/mssql/server`
    - Networks
    - Volumes
    - Ports
    - Environment
3. Define the `web_app` configuration
    - Name
    - Build
    - Ports
    - Restart on failure
    - Networks
4. Define the volumes and networks on root level
5. Attempt to build the image
6. `docker compose build`
7. Confirm the image was successfully created
8. Launch the containers and test the App
9. `docker compose up -d`
10. Debug
11. 