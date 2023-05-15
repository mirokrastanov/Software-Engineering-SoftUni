const http = require('http');
const { db } = require('./database.js');
const { indexTemplate, citeCss, indexCatTemplate, } = require('./views/templates.js');


const server = http.createServer(async (req, res) => {
    console.log('Server is called at: ' + req.url);

    if (req.url == '/' || req.url == '/index.html' || req.url == '/index') {
        const catsHtml = db.cats.map(cat => indexCatTemplate.replace('{{catName}}', cat.name)).join('');
        const indexHtml = indexTemplate.replace('{{cats}}', catsHtml);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(indexHtml);
    } else if (req.url == '/cats/add-breed') {

    } else if (req.url == '/cats/add-cat') {
        
    } else if (req.url == '/cat-shelter') {

    } else if (req.url == '/cats/edit-cat') {

    } else if (req.url == '/styles/site.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(citeCss);
    }

    res.end();
});

server.listen(5000, () => console.log('Server is running on port 5000...'));

