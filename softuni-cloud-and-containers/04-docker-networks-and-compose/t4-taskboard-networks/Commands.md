1. `docker network create taskboard_network`
2. `docker network ls`
3. `docker volume create sqldata`
4. `docker volume ls`
5. `docker run -d -e ACCEPT_EULA=Y -e MSSQL_SA_PASSWORD=strong_pwd -p 1433:1433 -v sqldata:/var/opt/mssql --rm --natwork taskboard_network --name sqlserver mcr.microsoft.com/mssql/server`
6. Generate `Dockerfile` from Visual Studio
7. Edit the Connection String inside `appsettings.json`
8. `DefaultConnection": "Server=sqlserver;Database=MyDB;User Id=sa;Password=strong_pwd;MultipleActiveResultSets=true`
9. `cd taskboard-app-root`
10. `docker build -t adrenaliin/taskboard:3.0.0 -f TaskBoard.WebApp\Dockerfile .`
11. `docker run -p 5000:80 --rm --network taskboard_network --name web_app -d adrenaliin/taskboard:3.0.0`
12. Close and remove all
13. `docker stop web_app sqlserver` (previous `--rm` inclusion does the rest)
14. The volume remains with all its data, despite everything else being destroyed