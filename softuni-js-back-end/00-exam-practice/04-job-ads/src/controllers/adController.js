const router = require('express').Router();
const { isAuth } = require('../middlewares/auth');
const adManager = require('../managers/adManager');
const errors = require('../util/error');
const parser = require('../util/parser');
const userManager = require('../managers/userManager');



router.get('/all', (req, res) => {
    res.render('ads/all');
});

router.get('/create', (req, res) => {
    res.render('ads/create');
});

router.get('/:adId/details', (req, res) => {
    res.render('ads/details');
});

router.get('/:adId/edit', (req, res) => {
    res.render('ads/edit');
});

router.get('/search', (req, res) => {
    res.render('ads/search');
});


module.exports = router;