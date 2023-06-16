const Ad = require('../models/Ad');


exports.getAll = async (search, platform) => {
    let result = await Ad.find().lean();
    if (search) result = result.filter(ad => ad.name.toLowerCase().includes(search.toLowerCase()));
    if (platform) result = result.filter(ad => ad.platform.toLowerCase() == platform.toLowerCase());
    return result;
};

exports.create = (adData) => {
    const ad = new Ad(adData);
    return ad.save();
};

exports.getOne = (adId) => Ad.findById(adId);

exports.buyOne = async (adId, userId) => {
    return Ad.findByIdAndUpdate(adId, { $push: { boughtBy: userId } });
};

exports.hasBought = (ad, isGuest, userId) => {
    let hasBought = false;
    if (!isGuest) {
        if (ad.boughtBy && ad.boughtBy.length > 0) {
            let result = ad.boughtBy.find(x => x == userId);
            if (result) hasBought = result == userId;
        }
    }
    return hasBought;
}

exports.delete = (adId) => Ad.findByIdAndDelete(adId);

exports.update = (adId, adData) => Ad.findByIdAndUpdate(adId, adData);

