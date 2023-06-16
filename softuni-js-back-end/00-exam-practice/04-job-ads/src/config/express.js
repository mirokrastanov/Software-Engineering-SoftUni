const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const auth = require('../middlewares/auth');

exports.configure = function (server) {
    server.use(express.static(path.resolve(__dirname, '../public')));
    server.use(express.urlencoded({ extended: false }));
    server.use(cookieParser());
    server.use(auth.authenticate);
}
