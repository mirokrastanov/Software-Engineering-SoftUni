const server = require('express')();
const express = require('./config/express');
const handlebars = require('./config/handlebars');
const database = require('./config/database');
const constants = require('./config/constants');
const routes = require('./routes');

express.configure(server);
handlebars.configure(server);

database.connect()
    .then(() => console.log('Database Connected!'))
    .catch(err => console.log('ERROR: Database connection failed!', err))

server.use(routes);

server.listen(constants.SERVER_PORT,
    () => console.log(`Server ON! >>> Handling requests at PORT: ${constants.SERVER_PORT} >>>`));
