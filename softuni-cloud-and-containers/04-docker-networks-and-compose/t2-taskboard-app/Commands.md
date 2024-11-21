1. Open `sln` file in Visual Studio
2. Use the `WebApp` to build a `Dockerfile`
3. Use the Developer Command Line
4. Build and Run the container
5. `dir`
6. `cd taskboard-app-root`
7. `docker build -t taskboard -f TaskBoard.WebApp\Dockerfile .` (because the `Dockerfile` is one level deeper)
8. `docker images`
9. `docker login`
10. `docker tag taskboard adrenaliin/taskboard:1.0.0`
11. `docker images`
12. `docker push adrenaliin/taskboard:1.0.0`