## Task 1 - with network definition
1. `docker network ls`
2. `docker network create my_network`
3. `docker network ls`
4. Create a `docker-compose.yml` file
5. `docker-compose build`
6. `docker-compose up -d`
7. `docker-compose ps`
8. Done.


## Task 2 - with auto-network creation
9.  `docker-compose stop`
10. `docker-compose down`
11. Create a `docker-compose-2.yml` file
12. `docker-compose up -d`
13. `docker-network ls`
14. `docker-compose down` -> Remove containers and networks. Keeps images.