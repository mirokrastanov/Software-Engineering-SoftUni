const router = require('express').Router();
const { isAuth } = require('../middlewares/auth');
const photoManager = require('../managers/photoManager');
const errors = require('../util/error');
const parser = require('../util/parser');
const userManager = require('../managers/userManager');
const mainManager = require('../managers/mainManager'); // RENAME THIS

// IMPORTS ABOVE - adjust if needed and copy to other files if needed
// VALIDATIONS - add below as notes and make sure to add them to the post actions


