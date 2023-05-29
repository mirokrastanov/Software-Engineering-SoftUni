const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send('Req body here...');
});

app.post('/', (req, res) => {
    res.status(201).send('Cat has been created!');
});

app.get('/cats', (req, res) => {
    res.send('Displays cats here.');
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

app.listen(5000, () => console.log('Server is listening on port 5000...'));