const router = require('express').Router();
const userManager = require('../managers/userManager');
const { TOKEN_KEY } = require('../config/constants');
const errors = require('../util/error');
const photoManager = require('../managers/photoManager');

// TODO: Adjust according to requirements!

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, password, email, repeatPassword } = req.body; // TODO: change here and all others
    try {
        await userManager.register({ username, password, email, repeatPassword });
        res.redirect('/users/login');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('users/register', { errorMessages });
        // TODO: make sure template knows this is an ARRAY of errors, even if its just 1
    }
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;  // TODO: change here and all others
    try {
        const token = await userManager.login(username, password);
        res.cookie(TOKEN_KEY, token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('users/login', { errorMessages });
        // TODO: make sure template knows this is an ARRAY of errors, even if its just 1
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(TOKEN_KEY);
    res.redirect('/');
});

router.get('/profile', async (req, res) => {
    const isGuest = !req.user;
    if (isGuest) return res.redirect('/404');

    let photos = await photoManager.getPhotos();
    let filtered = photos.slice().filter(x => x.owner == req.user._id);

    res.render('users/profile', { filtered, user: req.user, count: filtered.length, });
});

module.exports = router;