const Crypto = require('../models/Crypto');

exports.create = (cryptoData) => Crypto.create(cryptoData);

exports.getAll = async (name, paymentMethod) => {
    let result = await Crypto.find().populate('owner').lean();

    if (name) {
        result = result.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (paymentMethod) {
        result = result.filter(x => x.paymentMethod.toLowerCase() == paymentMethod.toLowerCase());
    }
    return result;
}



exports.getOne = (cryptoId) => Crypto.findById(cryptoId).populate('owner');

exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);

exports.edit = (cryptoId, cryptoData) => Crypto.findByIdAndUpdate(cryptoId, cryptoData);

exports.buyCrypto = async (cryptoId, userId) => {
    const crypto = await Crypto.findById(cryptoId);
    crypto.buyers.push(userId);
    return crypto.save();
};

exports.hasBought = (crypto, userId) => {
    let hasBought = false;
    if (crypto.buyers && crypto.buyers.length > 0) {
        let result = crypto.buyers.find(x => x == userId);
        if (result) hasBought = result == userId;
    }
    return hasBought;
}

exports.getByOwner = (userId) => Crypto.find({ owner: userId });