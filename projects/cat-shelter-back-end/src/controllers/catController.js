const router = require('express').Router();
const catManager = require('../managers/catManager');
const breedManager = require('../managers/breedManager');

router.get('/cats/add-breed', async (req, res) => {
    const breeds = await breedManager.getAll();

    res.render('addBreed', { breeds });
});

router.post('/cats/add-breed', async (req, res) => {
    const { breed } = req.body;

    await breedManager.create({ name: breed });

    res.redirect('/');
});

router.get('/cats/add-cat', async (req, res) => {
    const breeds = await breedManager.getAll();

    res.render('addCat', { breeds });
});

router.post('/cats/add-cat', async (req, res) => {
    const { name, description, img, breed } = req.body;

    await catManager.create({ name, description, img, breed, });

    res.redirect('/');
});

router.get('/cats/edit-cat/:catId', async (req, res) => {
    const { _id, name, description, img, breed } = await catManager.getOne(req.params.catId);
    const breeds = (await breedManager.getAll())
        .filter(x => x.name != breed);

    res.render('editCat', { breeds, _id, name, description, img, breed });
});

router.post('/cats/edit-cat/:catId', async (req, res) => { 
    const catId = req.params.catId;
    const { name, description, img, breed } = req.body;

    await catManager.edit(catId, name, description, img, breed);

    res.redirect('/');
});

module.exports = router;
