const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const { auth } = require('../middlewares/authMiddleware');

function expressConfigurator(app) {
app.use(express.static(path.resolve(__dirname, '../public'))); // this allows the /css/styles.css direct paths to assets
    app.use(express.urlencoded({ extended: false })); // body Parser
    app.use(cookieParser());
    app.use(auth);
}

module.exports = expressConfigurator;