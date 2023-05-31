const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
const handlebarsConfigurator = require('./config/handlebarsConfigurator');
const homeController = require('./controllers/homeController');

const app = express();
const PORT = 5000;

//Express config
expressConfigurator(app);

// Handlebars config
handlebarsConfigurator(app);

// Routers
app.use(homeController);


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));




