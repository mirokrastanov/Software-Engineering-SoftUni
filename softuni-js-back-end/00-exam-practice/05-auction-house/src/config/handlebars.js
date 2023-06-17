const handlebars = require('express-handlebars');

exports.configure = function (server) {
    server.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }));
    server.set('view engine', 'hbs');
    server.set('views', 'src/views');
}
