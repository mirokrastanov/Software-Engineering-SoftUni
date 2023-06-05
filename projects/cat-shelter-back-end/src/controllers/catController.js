const router = require('express').Router();


router.get('/cats/add-breed', (req, res) => {
    res.render('addBreed');
});




module.exports = router;
