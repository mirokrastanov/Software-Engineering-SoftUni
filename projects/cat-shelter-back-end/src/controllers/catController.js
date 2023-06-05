const router = require('express').Router();
const catManager = require('../managers/catManager');
const breedManager = require('../managers/breedManager');

router.get('/cats/add-breed', async (req, res) => {
    const breeds = await breedManager.getAll();

    res.render('addBreed', { breeds });
});

router.post('/cats/add-breed', async (req, res) => {
    const { breed } = req.body;

    await breedManager.create({ name: breed, });

    res.redirect('/');
});

router.get('/cats/add-cat', async (req, res) => {
    const breeds = await breedManager.getAll();

    res.render('addCat', { breeds });
});


module.exports = router;
