## Containerize the blue-vs-green app
1. `docker pull redis`
2. `docker pull postgres`
3. `cd ./app-root/result`
4. `docker build -t result .`
5. Fix `ENV` variables in the `Dockerfile` of the `result` app
6. `docker build -t result .`
7. `docker network ls`
8. `docker network create backend`
9. `docker network create frontend`
10. `docker network ls`
11. Create the sequence of commands for the `Dockerfile` of the `voting` app
12. `cd ..`
13. `cd ./vote`
14. `docker build -t vote .`
15. `cd ..`
16. `cd ./worker`
17. Create the sequence of commands for the `Dockerfile` of the `worker` app
18. `docker build -t worker .`
19. Create volumes
20. `docker volume ls`
21. `docker volume create postgresvol`
22. `docker volume ls`
23. Initiate containers
24. `docker run -d --name vote --network frontend --network backend -p 5000:80 vote`
25. `docker run -d --name result --network frontend --network backend -p 5001:80 result`
26. `docker run -d --name redis --network backend redis`
27. `docker run -d --name worker --network backend worker`
28. `docker run -d --name db --network backend -v postgresvol:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres postgres`
29. Inspect network
30. `docker network inspect frontend`
31. `docker network inspect backend`
32. Confirm the app works correctly

## Containerize the same app using `docker-compose`
1. Remove everything and perform the whole sequence using `docker-compose`
2. Create the `docker-compose.yml` file and add the command sequence
3. `docker compose build`
4. `docker compose up -d`
5. Confirm the app works correctly
6. `docker compose down`