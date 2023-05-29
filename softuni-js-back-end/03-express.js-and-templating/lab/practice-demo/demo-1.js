const express = require('express');
const path = require('path');
const app = express();

// Add third party middleware
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);



// Add middlewares
// Global middlewares
app.use((req, res, next) => {
    console.log('Middleware 1 - User connecting to server...');
    next();
});

app.use((req, res, next) => {
    console.log(`HTTP Request ${req.method}: ${req.path}`);
    next();
});

// Partial route middlewares
app.use('/cats', (req, res, next) => {
    console.log('Cats middleware');
    next();
});

// Route specific middleware
const specificMiddleware = (req, res, next) => {
    console.log('Specific middleware');
    next();
};
app.get('/specific', specificMiddleware, (req, res) => {
    res.send('Some specific route with middleware');
});





// Express Router / Actions
app.get('/', (req, res) => {
    res.send('Req body here...');
});

app.get('/cats', (req, res) => {
    res.send('Displays cats here.');
});

app.post('/cats', (req, res) => {
    console.log(req.body);
    res.status(201).send('Cat has been created!');
});

app.get('/cats/:catId', (req, res) => {
    const catId = Number(req.params.catId);
    if (!catId) return res.status(404).send('Cannot find cat.');

    console.log(req.params);
    res.send(`Request with parameter - ${req.params.catId}.`);
});

app.get('/download', (req, res) => {
    res.download('./files/sample.pdf');

    // res.attachment('./files/sample.pdf');
    // res.end();

    // res.sendFile(path.resolve(__dirname, 'files/sample.pdf'));
});

app.get('/old-route', (req, res) => {
    res.redirect('/cats');
});




app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});
// End of Express Router


app.listen(5000, () => console.log('Server is listening on port 5000...'));