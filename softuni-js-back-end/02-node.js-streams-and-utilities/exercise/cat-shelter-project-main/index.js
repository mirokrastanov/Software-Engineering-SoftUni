const http = require('http');
const fs = require('fs/promises');
const { replaceData, addCatOptionTemplate } = require('./util.js');
const { db } = require('./database.js');

const { addCatTemplate, catShelterTemplate, editCatTemplate } = require('./views/templates.js');

const server = http.createServer(async (req, res) => {
    console.log('Server is called at: ' + req.url);
    const siteCSS = await fs.readFile('./content/styles/site.css', 'utf-8');

    if (req.method == 'POST') {
        if (req.url == '/database') {
            let body = '';
            req.on('data', (data) => {
                console.log('POST data received at: ' + req.url);
                body += data;
            });
            req.on('end', () => {
                console.log('POST response sent back to requester.');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(body);
            });
        }

    } else if (req.method == 'GET') {
        if (req.url == '/' || req.url == '/index.html' || req.url == '/index') {

            const indexTemplate = await fs.readFile('./views/home/index.html', 'utf-8');
            const catTemplate = await fs.readFile('./views/cat.html', 'utf-8');
            const catsHTML = db.cats.map(cat => replaceData(catTemplate, cat)).join('');
            const indexHTML = replaceData(indexTemplate, { cats: catsHTML });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(indexHTML);

        } else if (req.url == '/cats/add-breed') {

            let addBreedHTML = await fs.readFile('./views/addBreed.html', 'utf-8');
            const breedsHTML = db.breeds.map(breed => addCatOptionTemplate(breed.name, true)).join('');
            addBreedHTML = addBreedHTML.replace('{{breeds}}', breedsHTML);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(addBreedHTML);

        } else if (req.url == '/cats/add-cat') {  // CONTINUE HERE

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
            res.write(siteCSS);

        } else if (req.url == '/database') {

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(db, null, 2));

        }

        res.end();
    }

});

server.listen(5000, () => console.log('Server is running on port 5000...'));

