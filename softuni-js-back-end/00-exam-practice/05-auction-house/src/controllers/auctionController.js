const router = require('express').Router();
const { isAuth } = require('../middlewares/auth');
const errors = require('../util/error');
const parser = require('../util/parser');
const userManager = require('../managers/userManager');
const auctionManager = require('../managers/auctionManager');

router.get('/browse', async (req, res) => {
    const auctions = await auctionManager.getAll();

    res.render('auctions/browse', { auctions });
});

router.get('/closed', isAuth, async (req, res) => {
    const closed = await auctionManager.getAll(true, req.user._id);
    console.log(closed);
    res.render('auctions/closed', { closed });
});

router.get('/publish', isAuth, (req, res) => {
    res.render('auctions/create');
});

router.post('/publish', isAuth, async (req, res) => {
    const auctionData = {
        ...req.body,
        author: req.user?._id,
        closed: false,
    };
    await auctionManager.create(auctionData);

    res.redirect('/auctions/browse');
});

router.get('/:auctionId/details', async (req, res) => {
    const auction = await auctionManager.getOne(req.params.auctionId);
    console.log(auction);
    if (!req.user) {
        return res.render('auctions/details', { auction });
    }
    if (auction.author._id == req.user?._id) {
        let hasBidder = false;
        if (auction.bidder) hasBidder = true;

        res.render('auctions/ownerDetails', { auction, hasBidder });
    } else {
        let hasNotBid = false;
        try {
            let canBid = await auctionManager.canBid(auction, req.user._id);
            if (canBid == 'success') hasNotBid = true;
            else if (canBid == 'You are the current highest bidder!') hasNotBid = false;
            else throw new Error(canBid);

            res.render('auctions/details', { auction, hasNotBid });
        } catch (err) {
            const errorMessages = errors.getMessageArray(err);
            res.render(`auctions/details`, { errorMessages, auction, hasNotBid });
        }
    };
});

router.post('/:auctionId/bid', isAuth, async (req, res) => {
    const { bid } = req.body;
    const auction = await auctionManager.getOne(req.params.auctionId);
    let hasNotBid = false;
    if (!req.user) res.redirect('/users/login');
    let canBid = await auctionManager.canBid(auction, req.user._id);
    try {
        if (canBid == 'success') hasNotBid = true;
        else if (canBid == 'You are the current highest bidder!') hasNotBid = false;
        else throw new Error(canBid);
        const result = await auctionManager.placeBid(auction, req.user._id, bid);
        console.log(result);
        if (result != 'success') throw new Error(result);

        res.redirect(`/auctions/${req.params.auctionId}/details`);
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.render(`auctions/details`, { errorMessages, auction, hasNotBid });
    }
});

router.get('/:auctionId/edit', isAuth, async (req, res) => {
    const auction = await auctionManager.getOne(req.params.auctionId);
    let hasBidder = auction.bidder;
    let options = parser.generateOptions(auction.category);

    res.render('auctions/edit', { auction, hasBidder, options });
});

router.post('/:auctionId/edit', isAuth, async (req, res) => {
    const auction = await auctionManager.getOne(req.params.auctionId);
    let options = parser.generateOptions(auction.category);
    let hasBidder = auction.bidder;
    const auctionData = { ...req.body };
    try {
        await auctionManager.update(req.params.auctionId, auctionData);

        res.redirect(`/auctions/${req.params.auctionId}/details`);
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.render('auctions/edit', { auction, hasBidder, options, errorMessages });
    }
});

router.get('/:auctionId/delete', isAuth, async (req, res) => {
    const auction = await auctionManager.getOne(req.params.auctionId).lean();
    if (!auction) return res.redirect('/404');
    if (!req.user) return res.redirect('/users/login');
    const isOwner = auction.author?._id.toString() === req.user?._id;
    try {
        if (isOwner) await auctionManager.delete(req.params.auctionId);
        else throw new Error('You are not the owner!');

        res.redirect('/auctions/browse');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        let hasBidder = false;
        if (auction.bidder) hasBidder = true;

        res.render('auctions/ownerDetails', { auction, hasBidder, errorMessages });
    }
});

router.get('/:auctionId/close', isAuth, async (req, res) => {
    const auction = await auctionManager.getOne(req.params.auctionId);
    let hasBidder = auction.bidder;
    const auctionData = { closed: true };
    try {
        await auctionManager.update(req.params.auctionId, auctionData);

        res.redirect(`/auctions/closed`);
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.render('auctions/details', { auction, hasBidder, errorMessages });
    }
});

module.exports = router;