const router = require('express').Router();
const { isAuth } = require('../middlewares/auth');
const adManager = require('../managers/adManager');
const errors = require('../util/error');
const parser = require('../util/parser');
const userManager = require('../managers/userManager');



router.get('/all', async (req, res) => {
    let ads;
    try {
        ads = await adManager.getAll();
        res.render('ads/all', { ads });
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('ads/all', { errorMessages });
    }
});

router.get('/create', async (req, res) => {
    let adData;
    let user;
    try {
        user = req.user;
        if (!user) res.redirect('/404');
        adData = {
            ...req.body,
            author: req.user._id,
            applicants: [],
        };
        res.render('ads/create', { ...adData });
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('ads/create', { errorMessages, ...adData });
    }
});

router.post('/create', async (req, res) => {
    let adData;
    let user;
    try {
        user = req.user;
        if (!user) res.redirect('/404');
        adData = {
            ...req.body,
            author: req.user._id,
            applicants: [],
        };
        await adManager.create(adData);
        res.redirect('/ads/all');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.status(404).render('ads/create', { errorMessages, ...adData });
    }
});

router.get('/:adId/details', async (req, res) => {
    let ad;
    let isOwner;
    let hasApplied;
    try {
        let userId = req.user?._id;
        ad = await adManager.getOne(req.params.adId).lean();
        isOwner = userId == ad.author?._id;
        hasApplied = adManager.hasApplied(ad, req.user, userId);
        let haveApplicants = ad.applicants.length > 0;
        res.render('ads/details', { ...ad, isOwner, hasApplied, haveApplicants });
    } catch (err) {
        res.redirect('/404');
    }
});

router.get('/:adId/apply', async (req, res) => {
    let ad;
    let isOwner;
    let hasApplied;
    let haveApplicants;
    try {
        let userId = req.user?._id;
        ad = await adManager.getOne(req.params.adId).lean();
        isOwner = userId == ad.author?._id;
        hasApplied = adManager.hasApplied(ad, req.user, userId);
        haveApplicants = ad.applicants.length > 0;
        await adManager.apply(req.params.adId, userId);
        res.redirect(`/ads/${req.params.adId}/details`);
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.render('ads/details', { ...ad, isOwner, hasApplied, haveApplicants, errorMessages });
    }
});

router.get('/:adId/delete', async (req, res) => {
    let ad;
    let isOwner;
    let hasApplied;
    let haveApplicants;
    try {
        let userId = req.user?._id;
        ad = await adManager.getOne(req.params.adId).lean();
        isOwner = userId == ad.author?._id;
        hasApplied = adManager.hasApplied(ad, req.user, userId);
        haveApplicants = ad.applicants.length > 0;
        await adManager.delete(req.params.adId);
        res.redirect('/ads/all');
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.render('ads/details', { ...ad, isOwner, hasApplied, haveApplicants, errorMessages });
    }
});

router.get('/:adId/edit', async (req, res) => {
    let ad;
    let isOwner;
    let hasApplied;
    let haveApplicants;
    try {
        let userId = req.user?._id;
        ad = await adManager.getOne(req.params.adId).lean();
        isOwner = userId == ad.author?._id;
        hasApplied = adManager.hasApplied(ad, req.user, userId);
        haveApplicants = ad.applicants.length > 0;
        res.render('ads/edit', { ...ad });
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.render('ads/details', { ...ad, isOwner, hasApplied, haveApplicants, errorMessages });
    }
});

router.post('/:adId/edit', async (req, res) => {
    let ad;
    try {
        ad = { ...req.body };
        await adManager.update(req.params.adId, ad);
        res.redirect(`/ads/${req.params.adId}/details`);
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.render('ads/edit', { ...ad, errorMessages });
    }
});

router.get('/search', async (req, res) => {
    let { search } = req.query;
    let results;
    try {
        results = await adManager.getAll(search);

        res.render('ads/search', { results, search })
    } catch (err) {
        const errorMessages = errors.getMessageArray(err);
        res.render('ads/search', { search, errorMessages });
    }
});


module.exports = router;