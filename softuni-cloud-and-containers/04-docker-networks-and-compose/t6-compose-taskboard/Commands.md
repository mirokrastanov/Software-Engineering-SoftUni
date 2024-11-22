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
10. Enter Debug Mode
11. `docker compose down`
12. Edit the `Dockerfile` 's arguments
    - `ARG BUILD_CONFIGURATION=Debug`
13. `docker compose up -d`
14. Open the project's `sln` file with Visual Studio
15. Debug > Attach to process
    - Connection type -> `Docker (Linux Container)`
    - Connection target -> `web_app`
    - Process -> `dotnet`
    - Attach
16. Add a breakpoint and test
17. Access the app and confirm execution is paused  at the breakpoint
18. After the task is completed - close and remove everything
19. `docker compose down`