const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
const handlebarsConfigurator = require('./config/handlebarsConfigurator');
const routes = require('./routes');

const app = express();
const PORT = 5000;

expressConfigurator(app);
handlebarsConfigurator(app);
app.use(routes);


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
