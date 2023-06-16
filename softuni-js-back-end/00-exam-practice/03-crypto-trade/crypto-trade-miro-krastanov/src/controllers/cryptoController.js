const router = require('express').Router();
const { isAuthenticated } = require('../middlewares/auth');
const errors = require('../util/error');
const parser = require('../util/parser');
const userManager = require('../managers/userManager');
const cryptoManager = require('../managers/cryptoManager');


router.get('/catalog', async (req, res) => {
    const offers = await cryptoManager.getAll();

    res.render('crypto/catalog', { offers });
});

router.get('/create', async (req, res) => {
    res.render('crypto/create');
});

router.post('/create', isAuthenticated, async (req, res) => {
    try {
        const user = req.user?._id;
        if (!user) throw new Error('You need to be logged in to be able to create offers');
        const cryptoData = {
            ...req.body,
            owner: user,
            buyers: [],
        };
        if (cryptoData.price && cryptoData.price != '') cryptoData.price = Number(cryptoData.price);
        if (!parser.optionIsValid(cryptoData.paymentMethod)) throw new Error('Payment method is invalid');
        await cryptoManager.create(cryptoData);
        res.redirect('/crypto/catalog');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        let options;
        if (cryptoData.paymentMethod) options = parser.generateOptions(cryptoData.paymentMethod);
        res.status(404).render('crypto/create', { errorMessages, offer: cryptoData, options });
    }
});

router.get('/:cryptoId/details', async (req, res) => {
    const offer = await cryptoManager.getOne(req.params.cryptoId).lean();
    const isOwner = offer.owner._id?.toString() === req.user?._id;
    let hasBought;
    try {
        if (!offer) return res.redirect('/404');
        if (req.user) {
            hasBought = cryptoManager.hasBought(offer, req.user._id);
        }
        res.render('crypto/details', { offer, isOwner, hasBought });
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('crypto/details', { errorMessages, offer, isOwner, hasBought });
    }
});

router.get('/:cryptoId/buy', isAuthenticated, async (req, res) => {
    const offer = await cryptoManager.getOne(req.params.cryptoId).lean();
    const user = req.user;
    const isOwner = offer.owner._id?.toString() === req.user?._id;
    let hasBought;
    try {
        if (!offer) return res.redirect('/404');
        if (!user) throw new Error('You need to be logged in');
        if (isOwner) throw new Error('You are the owner and cannot buy your own asset');
        await cryptoManager.buyCrypto(req.params.cryptoId, user._id);
        if (res.user) hasBought = cryptoManager.hasBought(offer, req.user._id);
        res.redirect(`/crypto/${offer._id}/details`);
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('crypto/details', { errorMessages, offer, isOwner, hasBought });
    }
});

router.get('/:cryptoId/delete', isAuthenticated, async (req, res) => {
    const offer = await cryptoManager.getOne(req.params.cryptoId).lean();
    const isOwner = offer.owner._id?.toString() === req.user?._id;
    let hasBought;
    try {
        if (!offer) return res.redirect('/404');
        if (res.user) hasBought = cryptoManager.hasBought(offer, req.user._id);
        if (!isOwner) throw new Error('You are the owner and cannot delete this');
        await cryptoManager.delete(req.params.cryptoId);
        res.redirect('/crypto/catalog');
    } catch (error) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('crypto/details', { errorMessages, offer, isOwner, hasBought });
    }
});

router.get('/:cryptoId/edit', async (req, res) => {
    const crypto = await cryptoManager.getOne(req.params.cryptoId).lean();
    if (!crypto) return res.redirect('/404');
    let options;
    if (crypto.paymentMethod) options = parser.generateOptions(crypto.paymentMethod);
    res.render('crypto/edit', { offer: crypto, options });
});

router.post('/:cryptoId/edit', isAuthenticated, async (req, res) => {
    const user = req.user?._id;
    const cryptoData = req.body;
    try {
        if (!user) throw new Error('You need to be logged in to be able to edit offers');
        if (cryptoData.price && cryptoData.price != '') cryptoData.price = Number(cryptoData.price);
        if (!parser.optionIsValid(cryptoData.paymentMethod)) throw new Error('Payment method is invalid');
        await cryptoManager.edit(req.params.cryptoId, cryptoData);
        res.redirect('/crypto/catalog');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        let options;
        if (cryptoData.paymentMethod) options = parser.generateOptions(cryptoData.paymentMethod);
        res.status(404).render('crypto/edit', { errorMessages, offer: cryptoData, options });
    }
});

router.get('/search', isAuthenticated, async (req, res) => {
    const { name, paymentMethod } = req.query;
    const results = await cryptoManager.getAll(name, paymentMethod);
    if (name) results.filter(x => x.name.toLowerCase() == name.toLowerCase());
    if (paymentMethod) results.filter(x => x.paymentMethod.toLowerCase() == paymentMethod.toLowerCase());
    const options = parser.generateOptions(paymentMethod);

    res.render('crypto/search', { results, name, options });

});

module.exports = router;