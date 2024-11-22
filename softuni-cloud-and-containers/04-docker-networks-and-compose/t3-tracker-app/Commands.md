1. Open terminal in `tracker-root`
2. `npm install`
3. `npm run build`
4. `docker build -t adrenaliin/tracker .`
5. `docker run -d -p 80:80 --name trackeapp adrenaliin/tracker`
6. `docker ps`
7. `docker images`
8. `docker push adrenaliin/tracker:2.0.0`