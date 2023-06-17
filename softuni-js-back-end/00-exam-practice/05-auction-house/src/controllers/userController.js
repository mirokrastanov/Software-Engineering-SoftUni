const router = require('express').Router();
const userManager = require('../managers/userManager');
const { TOKEN_KEY } = require('../config/constants');
const errors = require('../util/error');


router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { email, firstName, lastName, password, repeatPassword } = req.body; 
    try {
        await userManager.register({ email, firstName, lastName, password, repeatPassword });
        res.redirect('/users/login');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('users/register', { errorMessages });
    }
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;  
    try {
        const token = await userManager.login(email, password);
        res.cookie(TOKEN_KEY, token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('users/login', { errorMessages });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(TOKEN_KEY);
    res.redirect('/');
});

module.exports = router;