1. `docker network create mariadb_network`
2. `docker network ls`
3. `docker run -d --name mariadb_server --network mariadb_network -e MARIADB_USER=mariadb_user -e MARIADB_PASSWORD=my_cool_secret -e MARIADB_DATABASE=my_db -e MARIADB_ROOT_PASSWORD=my-secret-pw mariadb:latest`
4. `docker ps -a`
5. `docker run --name mariadb_client -it --network mariadb_network mariadb:latest mariadb --host mariadb_server --user madiadb_user --password my-secret-pw --database my_db` or with simplified syntax: `docker run -it --name mariadb_client --network mariadb_network --rm mariadb:latest mariadb -hmariadb_server -umariadb_user -p`
    - Inside the client (to test it):
    - `SELECT VERSION();`
    - Alternatively, via the server (for direct CLI control, without a client):
    - `docker exec -t mariadb_server /bin/sh`
    - `mariadb --host mariadb_server --user madiadb_user --password my-secret-pw --database my_db`
