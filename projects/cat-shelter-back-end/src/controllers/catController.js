const router = require('express').Router();
const catManager = require('../managers/catManager');
const breedManager = require('../managers/breedManager');

router.get('/cats/add-breed', async (req, res) => {
    const breeds = await breedManager.getAll();

    res.render('addBreed', { breeds });
});

router.post('/cats/add-breed', async (req, res) => {
    const { breed } = req.body;
    const breeds = await breedManager.getAll();
    let exists = breeds.find(x => x.name.toLowerCase() == breed.toLowerCase());

    if (breed == '') {
        res.render('addBreed', { breeds, class: 'empty', message: 'Input cannot be empty!' });
    } else if (exists) {
        res.render('addBreed', { breeds, class: 'empty', message: 'This breed already exists in the database!' });
    } else {
        await breedManager.create({ name: breed });

        res.redirect('/');
    }
});

router.get('/cats/add-cat', async (req, res) => {
    const breeds = await breedManager.getAll();

    res.render('addCat', { breeds });
});

router.post('/cats/add-cat', async (req, res) => {
    const { name, description, img, breed } = req.body;

    // verification of inputs
    let empty = [];
    let filled = {};
    if (name == '') empty.push('name');
    else filled['name'] = name;
    if (description == '') empty.push('description');
    else filled['description'] = description;
    if (img == '') empty.push('img');
    else filled['img'] = img;
    if (breed == '') empty.push('breed');
    else filled['breed'] = breed;
    if (empty.length != 0) {
        let properties = {};
        empty.forEach(x => properties[`${x}-empty`] = 'empty')

        let breeds = await breedManager.getAll();
        if (breed != breeds[0].name) {
            // keeping breed value, in case it was selected, but there
            // were other empty inputs
            let current = breeds.find(x => x.name == breed);
            breeds = breeds.filter(x => x.name != breed);
            breeds.unshift(current);
        }

        res.render('addCat', { breeds, ...properties, ...filled });
    } else {
        await catManager.create({ name, description, img, breed, });

        res.redirect('/');
    }
});

router.get('/cats/edit-cat/:catId', async (req, res) => {
    const valid = await catManager.exists(req.params.catId);
    if (!valid) return res.redirect('/404');

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

router.get('/cats/new-home/:catId', async (req, res) => {
    const valid = await catManager.exists(req.params.catId);
    if (!valid) return res.redirect('/404');

    const cat = await catManager.getOne(req.params.catId);
    res.render('catShelter', cat);
});

router.post('/cats/new-home/:catId', async (req, res) => {
    const catId = req.params.catId;

    await catManager.remove(catId);

    res.redirect('/');
});

module.exports = router;
