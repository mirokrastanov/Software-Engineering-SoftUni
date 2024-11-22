## Task
- Containerize app. The FE should share a network with the BE. The DB should share a network with the BE as well. Therefore, the BE should be a member in more than one network.

## Solution
1. `docker pull mongo`
2. `docker network ls`
3. `docker network create react-express` (FE <-> BE)
4. `docker network create express-mongo` (BE <-> DB)
5. `docker network ls`
6. Build BE from `Dockerfile` in `/backend`
7. `cd .\todo-root\backend`
8. `docker build -t backend_image .`
9. Build FE from `Dockerfile` in `/frontend`
10. `cd ..`
11. `cd .\frontend`
12. `docker build -t frontend_image .`
13. Launch FE on port `3000`
14. `docker run -d -p 3000:3000 --name frontend --network react-express frontend_image`
15. Launch BE
16. `docker run -d --name backend --network react-express backend_image`
17. Setup & Launch DB
18. Check the Docs for MongoDB Docker Image on DockerHub -> `mongo db docker image`
19. Find and modify the launch command
20. `docker run -d --name mongo --network express-mongo -v ./data:/data/db mongo`
21. Find and check the connection string -> `./backend/config/config.json`
22. Adjust the launch command accordingly
23. `docker network inspect react-express`
24. `docker network inspect express-mongo`
25. Connect the BE to the second network
26. `docker network connect express-mongo backend`
27. `docker network inspect express-mongo`
28. `docker ps` (all 3 containers should be up and properly connected to their respective networks - app should be fully operational)
29. The app is not running properly. Attempting to remedy that.
30. `docker network inspect express-mongo`
31. Remove the unnecessary environment variables and re-write the mongo command. Delete the previous container before re-creating it.
32. `docker run -d --name mongo --network express-mongo -v ./data:/data/db mongo`
33. Check and fix networks. 
34. `docker ps -a` (confirm all 3 containers are running)
35. `docker network inspect` (confirm network membership is as required)
36. Launch `localhost:3000` and confirm the App is working as expected.
37. Confirmed.

Launch (short):
1. `docker run -d --name mongo --network express-mongo -v ./data:/data/db mongo`
2. `docker run -d --name backend --network react-express --network express-mongo backend_image`
3. `docker run -d -p 3000:3000 --name frontend --network react-express frontend_image`
4. `docker ps -a`