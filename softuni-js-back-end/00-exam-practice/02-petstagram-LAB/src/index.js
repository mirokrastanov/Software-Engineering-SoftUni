const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { auth } = require('./middlewares/authMiddleware');
const { errorHandler } = require('./middlewares/errorHandlerMiddleware');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// TODO: change db name
mongoose.connect(`mongodb://127.0.0.1:27017/petstagram-1`)
    .then(() => console.log('DB Connected successfully!'))
    .catch(err => console.log('DB Error', err.message));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);
// app.use(errorHandler);


app.listen(PORT, () => console.log(`Server started at port ${PORT}...`));