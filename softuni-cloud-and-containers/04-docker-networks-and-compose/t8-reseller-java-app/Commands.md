1. Build the app
2. `mvn clean package -DskipTests`
3. Create the `Dockerfile`
4. Build the image
5. `docker build -t reseller_app .`
6. Create the `docker-compose.yml` file
7. Set up the java & mysql configuration
8. Build the container
9. `docker-compose build`
10. `docker compose up -d`
11. Close and remove everything
12. `docker compose down`