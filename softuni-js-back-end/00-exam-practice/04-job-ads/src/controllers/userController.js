const router = require('express').Router();
const userManager = require('../managers/userManager');
const { TOKEN_KEY } = require('../config/constants');
const errors = require('../util/error');

// TODO: Adjust according to requirements!

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { email , password, repeatPassword, description } = req.body; // TODO: change here and all others
    try {
        await userManager.register({ email, password, repeatPassword, description });
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
    const { email, password } = req.body;  // TODO: change here and all others
    try {
        const token = await userManager.login(email, password);
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

module.exports = router;