const router = require('express').Router();
const catManager = require('../managers/catManager');
const breedManager = require('../managers/breedManager');

router.get('/cats/add-breed', async (req, res) => {
    const breeds = await breedManager.getAll();

    console.log(await breedManager.getAll());
    
    res.render('addBreed', { breeds });
});




module.exports = router;
