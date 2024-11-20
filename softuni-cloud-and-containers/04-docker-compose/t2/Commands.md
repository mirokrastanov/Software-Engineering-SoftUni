1. `docker run -d --name container1 nginxdemos/hello`
2. `docker run -d --name container2 nginxdemos/hello`
3. `docker network inspect bridge`
4. `docker exec -it container1 /bin/sh`
   - Inside the container
   - `cat /etc/os-release`
   - `ifconfig`
   - `ping 172.17.0.3` (the IP of `container2`)
   - `exit`
5. `docker exec -it container2 /bin/sh`
   - Inside the container
   - `cat /etc/os-release`
   - `ifconfig`
   - `exit`
6. `docker network create myNetwork1`
7. `docker network ls`
8. `docker run -d --name container3 --network myNetwork1 nginxdemos/hello`

### 1 & 2 are on a different network, thus `ping` is not available
### Proceeding with next example -> Exercise: Connect `mySQL` DB with a `WordPress` App