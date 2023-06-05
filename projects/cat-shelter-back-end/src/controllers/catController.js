const router = require('express').Router();
const catManager = require('../managers/catManager');

router.get('/cats/add-breed', async (req, res) => {
    

    console.log(await catManager.getAll());
    
    res.render('addBreed');
});




module.exports = router;
