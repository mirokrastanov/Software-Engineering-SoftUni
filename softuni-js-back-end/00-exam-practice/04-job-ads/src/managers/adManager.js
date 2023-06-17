const Ad = require('../models/Ad');


exports.getAll = async (search) => {
    let result = await Ad.find().populate('author').populate('applicants').lean();
    if (search) result = result.filter(ad => ad.author.email.toLowerCase().includes(search.toLowerCase()));
    return result;
};

exports.create = (adData) => {
    const ad = new Ad(adData);
    return ad.save();
};

exports.getOne = (adId) => Ad.findById(adId).populate('author').populate('applicants');

exports.apply = async (adId, userId) => {
    return Ad.findByIdAndUpdate(adId, { $push: { applicants: userId } });
};

exports.hasApplied = (ad, isNotGuest, userId) => {
    let hasApplied = false;
    if (isNotGuest) {
        if (ad.applicants && ad.applicants.length > 0) {
            let result = ad.applicants.find(x => x == userId);
            if (result) hasApplied = result == userId;
        }
    }
    return hasApplied;
}

exports.delete = (adId) => Ad.findByIdAndDelete(adId);

exports.update = (adId, adData) => Ad.findByIdAndUpdate(adId, adData);

