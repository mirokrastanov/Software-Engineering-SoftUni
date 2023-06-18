const router = require('express').Router();

// TODO: If home and catalog/dashboard are the same ==> import extra manager and use the commented section


router.get('/', (req, res) => { // TODO: delete this if catalog & home are the same page
    res.render('home');
});


router.get('/', async (req, res) => { // TODO: delete this if catalog is SEPARATE

    const { search, from, to } = req.query; // TODO: adjust search params
    const cubes = await cubeManager.getAll(search, from, to);
    res.render('home', { cubes, search, from, to });  
});


router.get('/about', (req, res) => { // TODO: remove if there is no about
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;