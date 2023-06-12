const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');
const { getCubeDifficultyOptions } = require('../util/viewHelpers');

router.get('/create', isAuth, (req, res) => { // can chain middlewares in between, but its not feasible
    console.log(req.user);
    res.render('cube/create');
});

router.post('/create', isAuth, async (req, res) => {
    const { name,
        description,
        imageUrl,
        difficultyLevel, } = req.body;

    await cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
        owner: req.user._id,
    });

    res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
    const cube = await cubeManager.getOneWithAccessories(req.params.cubeId).lean();

    if (!cube) return res.redirect('/404');

    const isOwner = cube.owner?.toString() === req.user?._id; // optional chanining to prevent undefined.toString() erroring out

    res.render('cube/details', { cube, isOwner });
});

router.get('/:cubeId/attach-accessory', isAuth, async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    const accessories = await accessoryManager.getNotAttached(cube.accessories).lean();

    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', isAuth, async (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;

    await cubeManager.attachAccessory(cubeId, accessoryId);

    res.redirect(`/cubes/${cubeId}/details`);
});

router.get('/:cubeId/delete', isAuth, async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean(); // handlebars not taking a document from the db directly - lean resolves that

    const options = getCubeDifficultyOptions(cube.difficultyLevel);

    res.render('cube/delete', { cube, options });
});

router.post('/:cubeId/delete', isAuth, async (req, res) => {
    await cubeManager.delete(req.params.cubeId);

    res.redirect(`/`);
});

router.get('/:cubeId/edit', isAuth, async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean(); // handlebars not taking a document from the db directly - lean resolves that

    if (cube.owner?.toString() !== req.user?._id) return res.redirect('/404');

    const options = getCubeDifficultyOptions(cube.difficultyLevel);

    res.render('cube/edit', { cube, options });
});

router.post('/:cubeId/edit', isAuth, async (req, res) => {
    const cubeData = req.body;

    await cubeManager.update(req.params.cubeId, cubeData);

    res.redirect(`/cubes/${req.params.cubeId}/details`);
});



module.exports = router;