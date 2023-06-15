const express = require('express');
const expressConfigurator = require('./config/expressConfigurator');
const handlebarsConfigurator = require('./config/handlebarsConfigurator');
const dbConnect = require('./config/dbConfig'); 
const routes = require('./routes');

const app = express();
const PORT = 3000; 

expressConfigurator(app);
handlebarsConfigurator(app);

dbConnect()
    .then(() => console.log('DB Connected Successfully!'))
    .catch(err => console.log('DB Error!', err))

app.use(routes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}...`));
