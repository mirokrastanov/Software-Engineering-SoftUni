const router = require('express').Router();

router.get('/catalog', async (req, res) => {


    res.render('catalog', { games: [] });
});

module.exports = router;