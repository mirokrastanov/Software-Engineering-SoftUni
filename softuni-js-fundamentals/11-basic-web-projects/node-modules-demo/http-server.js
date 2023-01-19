const http = require('http');

const app = http.createServer(function (req, res) {
    console.log('Hello World!');           // shows in the CONSOLE
    res.write('Hello World from server!'); // shows in the BROWSER
    res.end();
});

app.listen(5000); // upon loading localhost:5000 it gets ping and executes the app's function's body
console.log('Server is listening on port 5000...');