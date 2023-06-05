const router = require('express').Router();


router.get('/', async (req, res) => {
    res.render('index', { search: true });  // loads index.hbs and loads it with the "items" array
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;