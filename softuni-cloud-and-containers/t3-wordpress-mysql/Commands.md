1. `docker network create my_network`
2. `docker network ls`
3. Create project folder `Wordpress` on the `C:/` drive
4. `cd C:/Wordpress`
5. `docker run -dit --name wordpress_db -e MYSQL_ROOT_PASSWORD=pass -e MYSQL_DATABASE=wordpressdb -e MYSQL_USER=wordpress -e MYSQL_PASSWORD=wordpress -expose 3306 --expose 33060 --network my_network -v %cd%/data:/var/lib/mysql mysql`
6. `docker network inspect my_network`
7. `docker run -dit --name wordpress-website -e WORDPRESS_DB_HOST=wordpress_db -e WORDPRESS_DB_USER=wordpress -e WORDPRESS_DB_PASSWORD=wordpress -e WORDPRESS_DB_NAME=wordpressdb -v %cd%/wp-data:/var/www/html -p 80:80 --network my_network wordpress`
8. `docker ps`
9. `docker network inspect my_network`
