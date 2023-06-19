const router = require('express').Router();
const animalManager = require('../managers/animalManager');

router.get('/', async (req, res) => {
    const animals = await animalManager.getAll();
    let lastThree = [];
    if (animals.length <= 3) lastThree = animals.slice();
    else lastThree = animals.slice().reverse().splice(0, 3).reverse();

    res.render('home', { lastThree });
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;