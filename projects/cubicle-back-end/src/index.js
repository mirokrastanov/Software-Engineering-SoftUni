const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
const handlebarsConfigurator = require('./config/handlebarsConfigurator');

const app = express();
const PORT = 5000;

//Express config
expressConfigurator(app);

// Handlebars config
handlebarsConfigurator(app);


// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));




