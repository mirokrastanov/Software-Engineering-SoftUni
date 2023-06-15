const router = require('express').Router();
const userManager = require('../managers/userManager');
const { TOKEN_KEY } = require('../config/constants');
const { extractErrorMessages } = require('../util/errorHelpers');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body; 
    try {
        await userManager.register({ username, email, password, repeatPassword });
        res.redirect('/');
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
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
        const errorMessages = extractErrorMessages(err);
        res.status(404).render('users/login', { errorMessages, email }); 
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(TOKEN_KEY);
    res.redirect('/');
});

module.exports = router;