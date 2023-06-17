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

router.get('/closed', (req, res) => {
    res.render('auctions/closed');
});

router.get('/publish', (req, res) => {
    res.render('auctions/create');
});

router.post('/publish', async (req, res) => {
    const auctionData = {
        ...req.body,
        author: req.user?._id,
        bid: 0,
    };
    await auctionManager.create(auctionData);

    res.redirect('/auctions/browse');
});

router.get('/:auctionId/details', async (req, res) => {
    const auction = await auctionManager.getOne(req.params.auctionId);
    console.log(auction);
    if (auction.author._id == req.user?._id) {
        let hasBidder = false;
        if (auction.bidder) hasBidder = true;

        res.render('auctions/ownerDetails', { auction, hasBidder });
    } else {
        let hasNotBid = true;
        if (auction.bidder?.info && auction.bidder?.info == req.user?.id) hasNotBid = false;

        res.render('auctions/details', { auction, hasNotBid });
    }
});

router.post('/:auctionId/bid', async (req, res) => {
    const { bid } = req.body;
    const auction = await auctionManager.getOne(req.params.auctionId);
    let currentBid = 0;
    if (auction.bid) currentBid = auction.bid;
    const result = await auctionManager.placeBid(req.params.auctionId, req.user._id, currentBid, bid);
    console.log(result);
    res.redirect(`/auctions/${req.params.auctionId}/details`);
});

router.get('/:auctionId/edit', (req, res) => {
    res.render('auctions/edit');
});

router.get('/:auctionId/delete', (req, res) => {
    res.redirect('/auctions/browse');
});

module.exports = router;