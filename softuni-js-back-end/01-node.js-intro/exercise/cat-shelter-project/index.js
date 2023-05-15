const http = require('http');
const { db } = require('./database.js');
const { indexTemplate, citeCss, indexCatTemplate, addBreedTemplate, addCatTemplate, catShelterTemplate,
    editCatTemplate, addCatOptionTemplate } = require('./views/templates.js');


const server = http.createServer(async (req, res) => {
    console.log('Server is called at: ' + req.url);


    if (req.url == '/' || req.url == '/index.html' || req.url == '/index') {
        const catsHTML = db.cats.map(cat => indexCatTemplate(cat.img, cat.name, cat.breed, cat.description)).join('');
        const indexHTML = indexTemplate.replace('{{cats}}', catsHTML);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(indexHTML);

    } else if (req.url == '/cats/add-breed') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(addBreedTemplate);

    } else if (req.url == '/cats/add-cat') {
        const breedsHTML = db.breeds.map(breed => addCatOptionTemplate(breed.name)).join('');
        const addCatHTML = addCatTemplate.replace('{{breeds}}', breedsHTML);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(addCatHTML);

    } else if (req.url == '/cat-shelter') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(catShelterTemplate);

    } else if (req.url == '/cats/edit-cat') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(editCatTemplate);

    } else if (req.url == '/styles/site.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(citeCss);

    } else if (req.url == '/database') {
        if (req.method == 'POST') {
            let raw;
            req.on('data', (data) => {
                raw += data;
                console.log(raw);
            });
            req.on('end', () => {
                console.log('done');
                res.write(raw); // figure out how to return the data or return ANYTHING :D 
            });
        } else if (req.method == 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(req.method);
        }

    }

    res.end();
});

server.listen(5000, () => console.log('Server is running on port 5000...'));

