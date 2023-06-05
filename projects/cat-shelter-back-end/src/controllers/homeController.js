const router = require('express').Router();
const catManager = require('../managers/catManager');


router.get('/', async (req, res) => {
    const { search } = req.query;

    const cats = await catManager.getAll(search);
    
    res.render('index', {
        searchElement: true, cats, search,
    });  // loads index.hbs and loads it with the "items" array
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;