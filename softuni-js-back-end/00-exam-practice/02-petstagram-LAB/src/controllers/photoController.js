const router = require('express').Router();
const photoManager = require('../managers/photoManager');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../util/errorHelpers');

router.get('/', async (req, res) => {
    const photos = await photoManager.getAll().lean();

    res.render('photos', { photos }); // it will get the index inside automatically
});

router.get('/create', isAuth, (req, res) => {
    res.render('photos/create');
});

router.post('/create', isAuth, async (req, res) => {
    const photoData = {
        ...req.body,
        owner: req.user._id,
    };
    try {
        await photoManager.create(photoData);
        res.redirect('/photos');
    } catch (err) {
        res.render('photos/create', { error: getErrorMessage(err) });
    }
});

router.get('/:photoId/details', async (req, res) => {
    const photoId = req.params.photoId;
    const photo = await photoManager.getOne(photoId).populate('comments.user').lean();
    const isOwner = req.user?._id == photo.owner._id;

    res.render('photos/details', { photo, isOwner });
});

router.get('/:photoId/delete', isAuth, async (req, res) => {
    const photoId = req.params.photoId;
    try {
        await photoManager.delete(photoId);
        res.redirect('/photos');
    } catch (err) {
        res.render(`photos/details`, { error: 'Unsuccessful deletion' });
    }
});

router.get('/:photoId/edit', isAuth, async (req, res) => {
    const photoId = req.params.photoId;
    const photo = await photoManager.getOne(photoId).lean();
    res.render('photos/edit', { photo });

});

router.post('/:photoId/edit', isAuth, async (req, res) => {
    const photoData = req.body;
    try {
        await photoManager.edit(req.params.photoId, photoData);
        res.redirect(`/photos/${req.params.photoId}/details`);
    } catch (error) {
        res.render(`photos/details`, { error: 'Unsuccessful update', photo: photoData, });
    }
});

router.post('/:photoId/comments', isAuth, async (req, res) => {
    const photoId = req.params.photoId;
    const { message } = req.body;
    const user = req.user._id;

    try {
        await photoManager.addComment(photoId, { user, message });

        res.redirect(`/photos/${photoId}/details`);
    } catch (error) {
        res.render(`photos/details`, { error: 'Unsuccessful comment post' });
    }
});


module.exports = router;
