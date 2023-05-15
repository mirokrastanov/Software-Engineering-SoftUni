const http = require('http');
const { indexTemplate, citeCss, } = require('./views/templates.js');


const server = http.createServer(async (req, res) => {
    console.log('Server is called at: ' + req.url);

    if (req.url == '/' || req.url == '/index.html' || req.url == '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(indexTemplate);
    } else if (req.url == '/cats/add-breed') {

    } else if (req.url == '/cats/add-cat') {

    } else if (req.url == '/cat-shelter') {

    } else if (req.url == '/edit-cat') {

    } else if (req.url == '/styles/site.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(citeCss);
    }

    res.end();
});

server.listen(5000, () => console.log('Server is running on port 5000...'));

