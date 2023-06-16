const router = require('express').Router();
const adManager = require('../managers/adManager');
const errors = require('../util/error');


router.get('/', async (req, res) => {
    let ads;
    let filteredAds;
    try {
        ads = await adManager.getAll();
        filteredAds = ads.slice(0, 3);
        res.render('home', { filteredAds });
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('home', { errorMessages });
    }
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;