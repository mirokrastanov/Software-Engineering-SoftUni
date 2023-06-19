const router = require('express').Router();
const { isAuth } = require('../middlewares/auth');
const errors = require('../util/error');
const animalManager = require('../managers/animalManager');


router.get('/dashboard', async (req, res) => {
    const animals = await animalManager.getAll();

    res.render('animals/dashboard', { animals });
});

router.get('/create', isAuth, (req, res) => {
    const animal = req.body;
    console.log(req.user);


    if (animal) res.render('animals/create', { ...animal });
    else res.render('animals/create');
});

router.post('/create', isAuth, async (req, res) => {
    let animal = req.body;
    try {
        if (animal.years && animal.years != '') animal.years = Number(animal.years);
        const animalData = await animalManager.create({
            ...animal,
            donations: [],
            owner: req.user._id,
        });
        console.log(animalData);
        res.redirect('/animals/dashboard');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        if (animal) res.status(404).render('animals/create', { errorMessages, ...animal });
        else res.status(404).render('animals/create', { errorMessages });
    }
});

router.get('/:animalId/details', async (req, res) => {
    const animal = await animalManager.getOne(req.params.animalId);
    if (!animal) return res.redirect('/404');
    const isOwner = animal.owner._id?.toString() === req.user?._id;
    const user = req.user;
    let hasDonated = false;
    if (user) hasDonated = animalManager.hasDonated(animal, user._id);

    res.render('animals/details', { animal, isOwner, hasDonated });
});

router.get('/:animalId/donate', isAuth, async (req, res) => {
    const animal = await animalManager.getOne(req.params.animalId);
    if (!animal) return res.redirect('/404');

    const isOwner = animal.owner._id?.toString() === req.user?._id;
    const isGuest = !req.user;
    const user = !isGuest ? req.user : undefined;

    if (isGuest) return res.redirect('/users/login');
    try {
        if (isOwner) throw new Error('You are the owner of this animal!');
        const hasDonated = animalManager.hasDonated(animal, user._id);
        if (!hasDonated) {
            await animalManager.donate(animal._id, user._id);
            res.redirect(`/animals/${animal._id}/details`);
        } else {
            throw new Error('You have already donated to this animal!');
        }
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render(`animals/details`, { errorMessages, animal, isOwner });
    }
});

router.get('/:animalId/delete', isAuth, async (req, res) => {
    const animal = await animalManager.getOne(req.params.animalId);
    if (!animal) return res.redirect('/404');

    const isOwner = animal.owner._id?.toString() === req.user?._id;
    const isGuest = !req.user;
    if (isGuest) return res.redirect('/users/login');
    const user = !isGuest ? req.user : undefined;
    try {
        if (isOwner) await animalManager.delete(req.params.animalId);
        else throw new Error('You are not the owner of this animal!');

        res.redirect(`/animals/dashboard`);
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render(`animals/details`, { errorMessages, animal, isOwner });
    }
});

router.get('/:animalId/edit', isAuth, async (req, res) => {
    const animal = await animalManager.getOne(req.params.animalId);
    if (!animal) return res.redirect('/404');
    const isGuest = !req.user;
    if (isGuest) return res.redirect('/404');
    const isOwner = animal.owner._id?.toString() === req.user?._id;
    try {
        if (!isOwner) throw new Error('You are not the owner of this animal!');

        res.render('animals/edit', { ...animal, isOwner });
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render(`animals/details`, { errorMessages, ...animal, isOwner });
    }
});

router.post('/:animalId/edit', isAuth, async (req, res) => {
    const animal = await animalManager.getOne(req.params.animalId);
    if (!animal) return res.redirect('/404');
    const isGuest = !req.user;
    if (isGuest) return res.redirect('/404');
    const isOwner = animal.owner._id?.toString() === req.user?._id;
    let { name, years, kind, image, need, location, description } = req.body;
    try {
        if (!isOwner) {
            const user = req.user;
            let hasDonated = false;
            if (user) hasDonated = animalManager.hasDonated(animal, user._id);
            return res.render('animals/details', { errorMessages: ['You are not the owner of this Animal!'], animal, isOwner, hasDonated });
        }
        if (years && years != '') years = Number(years);
        let result = await animalManager.update(animal._id, { name, years, kind, image, need, location, description });
        if (result) throw result;
        res.redirect(`/animals/${animal._id}/details`);
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render(`animals/edit`, { errorMessages, name, years, kind, image, need, location, description, isOwner });
    }
});

router.get('/search', async (req, res) => {
    const { location } = req.query;
    let found;
    if (!location) found = await animalManager.getAll();
    else found = await animalManager.getAll(location);

    res.render('animals/search', { found, location });
});


module.exports = router;