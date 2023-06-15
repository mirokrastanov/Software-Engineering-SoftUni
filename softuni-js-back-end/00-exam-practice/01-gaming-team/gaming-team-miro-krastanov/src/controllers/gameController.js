const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const gameManager = require('../managers/gameManager');
const { getPlatformOptions, platformIsValid } = require('../util/viewHelpers');
const { extractErrorMessages } = require('../util/errorHelpers');

router.get('/catalog', async (req, res) => {
    const games = await gameManager.getAllGames();

    res.render('games/catalog', { games });
});

router.get('/create', isAuth, (req, res) => {
    console.log(req.user);
    res.render('games/create', { options: getPlatformOptions('PC') });
});

router.post('/create', isAuth, async (req, res) => {
    let { platform, name, image, price, genre, description, } = req.body;
    if (price && price != '') price = Number(price);
    try {
        if (!platformIsValid(platform)) throw new Error('Invalid Platform');
        const gameData = await gameManager.create({
            name, image, price, description, genre, platform, boughtBy: [], owner: req.user._id,
        });
        console.log(gameData);
        res.redirect('/games/catalog');
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        const options = getPlatformOptions(platform);
        res.status(404).render('games/create', { errorMessages, options, name, image, price, genre, description });
    }
});

router.get('/:gameId/details', async (req, res) => {
    const game = await gameManager.getOne(req.params.gameId).lean();
    if (!game) return res.redirect('/404');

    const isOwner = game.owner?.toString() === req.user?._id;
    const isGuest = !req.user;
    const user = !isGuest ? req.user : undefined;
    let hasBought = false;
    if (user) hasBought = gameManager.hasBoughtGame(game, isGuest, user._id);

    res.render('games/details', { game, isOwner, isGuest, hasBought });
});

router.get('/:gameId/buy', isAuth, async (req, res) => {
    const game = await gameManager.getOne(req.params.gameId).lean();
    if (!game) return res.redirect('/404');

    const isOwner = game.owner?.toString() === req.user?._id;
    const isGuest = !req.user;
    const user = !isGuest ? req.user : undefined;

    if (isGuest) return res.redirect('/users/login');
    try {
        if (isOwner) throw new Error('You are the owner of this game code!');
        const hasBought = gameManager.hasBoughtGame(game, isGuest, user._id);
        if (!hasBought) {
            await gameManager.buyGame(game._id, user._id);
            res.redirect(`/games/${game._id}/details`);
        } else {
            throw new Error('You have already bought this game code!');
        }
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        res.status(404).render(`/games/${game.id}/details`, { errorMessages });
    }
});

router.get('/:gameId/delete', isAuth, async (req, res) => {
    const game = await gameManager.getOne(req.params.gameId).lean();
    if (!game) return res.redirect('/404');

    const isOwner = game.owner?.toString() === req.user?._id;
    const isGuest = !req.user;
    const user = !isGuest ? req.user : undefined;
    if (isOwner) await gameManager.delete(req.params.gameId);

    res.redirect(`/games/catalog`);
});

router.get('/:gameId/edit', isAuth, async (req, res) => {
    const game = await gameManager.getOne(req.params.gameId).lean();
    if (!game) return res.redirect('/404');
    const isGuest = !req.user;
    if (isGuest) return res.redirect('/404');
    const isOwner = game.owner?.toString() === req.user?._id;
    try {
        if (!isOwner) throw new Error('You are not the owner of this game code!');

        const options = getPlatformOptions(game.platform);
        res.render('games/edit', { game, options });
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        res.status(404).render(`/games/${game.id}/details`, { errorMessages });
    }
});

router.post('/:gameId/edit', isAuth, async (req, res) => {
    const game = await gameManager.getOne(req.params.gameId).lean();
    if (!game) return res.redirect('/404');
    const isGuest = !req.user;
    if (isGuest) return res.redirect('/404');
    const isOwner = game.owner?.toString() === req.user?._id;
    try {
        if (!isOwner) throw new Error('You are not the owner of this game code!');
        let { platform, name, image, price, genre, description } = req.body;
        if (price && price != '') price = Number(price);

        await gameManager.update(game._id, { platform, name, image, price, genre, description });
        res.redirect(`/games/${game._id}/details`);
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        res.status(404).render(`/games/${game.id}/details`, { errorMessages });
    }
});

router.get('/search', async (req, res) => {
    const { name, platform } = req.query;
    const results = await gameManager.getAllGames(name, platform);
    console.log(results);

    res.render('games/search', { results });
});

module.exports = router;