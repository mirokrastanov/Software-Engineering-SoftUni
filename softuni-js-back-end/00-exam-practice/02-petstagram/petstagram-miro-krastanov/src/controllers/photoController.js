const router = require('express').Router();
const { isAuthenticated } = require('../middlewares/auth');
const photoManager = require('../managers/photoManager');
const errors = require('../util/error');
const parser = require('../util/parser');
const userManager = require('../managers/userManager');

// VALIDATIONS 
// • The photo image is required and should start with http:// or https://
// • The age is required and should be at least 1 and no longer than 100 characters.
// • The description is required and should be at least 5 and no longer than 50 characters.
// • The location is required and should be at least 5 and no longer than 50 characters.

router.get('/catalog', async (req, res) => {
    const photosRaw = await photoManager.getPhotos();
    const photos = await parser.genNames(photosRaw);

    res.render('photos/catalog', { photos });
});

router.get('/create', isAuthenticated, (req, res) => {
    res.render('photos/create');
});

router.post('/create', isAuthenticated, async (req, res) => {
    let { name, age, description, location, image } = req.body;
    if (age && age != '') age = Number(age);
    try {
        const photoData = await photoManager.createPhoto({
            name, age, description, location, image, commentList: [], owner: req.user._id,
        });
        res.redirect('/photos/catalog');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('photos/create', { errorMessages, name, age, description, location, image });
    }
});

router.get('/:photoId/details', async (req, res) => {
    const photo = await photoManager.getOne(req.params.photoId).lean();
    if (!photo) return res.redirect('/404');
    const comments = await parser.addUsernames(photo.commentList);

    const isOwner = photo.owner?.toString() === req.user?._id;
    const isGuest = !req.user;
    const user = await userManager.getUser(photo.owner);
    photo.ownerName = user.username;

    res.render('photos/details', { photo, isOwner, isGuest, comments });
});

router.post('/:photoId/details', async (req, res) => {
    const photo = await photoManager.getOne(req.params.photoId).lean();
    if (!photo) return res.redirect('/404');

    const { comment } = req.body;

    const isOwner = photo.owner?.toString() === req.user?._id;
    const isGuest = !req.user;
    const user = !isGuest ? req.user : undefined;

    await photoManager.postComment(photo._id, user._id, comment);

    res.redirect(`/photos/${photo._id}/details`);
});

router.get('/:photoId/delete', isAuthenticated, async (req, res) => {
    const photo = await photoManager.getOne(req.params.photoId).lean();
    if (!photo) return res.redirect('/404');

    const isOwner = photo.owner?.toString() === req.user?._id;
    if (isOwner) await photoManager.delete(req.params.photoId);

    res.redirect(`/photos/catalog`);
});

router.get('/:photoId/edit', isAuthenticated, async (req, res) => {
    const photo = await photoManager.getOne(req.params.photoId).lean();
    if (!photo) return res.redirect('/404');
    const isGuest = !req.user;
    if (isGuest) return res.redirect('/404');
    const isOwner = photo.owner?.toString() === req.user?._id;
    try {
        if (!isOwner) throw new Error('You are not the owner!');

        res.render('photos/edit', { photo });
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render(`/photos/${photo.id}/details`, { errorMessages });
    }
});

router.post('/:photoId/edit', isAuthenticated, async (req, res) => {
    const photo = await photoManager.getOne(req.params.photoId).lean();
    if (!photo) return res.redirect('/404');
    const isGuest = !req.user;
    if (isGuest) return res.redirect('/404');
    const isOwner = photo.owner?.toString() === req.user?._id;
    let { name, age, description, location, image } = req.body;
    try {
        if (!isOwner) throw new Error('You are not the owner!');
        if (age && age != '') age = Number(age);

        await photoManager.update(photo._id, { name, age, description, location, image });
        res.redirect(`/photos/${photo._id}/details`);
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render(`/photos/${photo.id}/edit`, { errorMessages, name, age, description, location, image });
    }
});


module.exports = router;