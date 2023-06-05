const Breed = require('../models/Breed');

exports.getAll = async () => {
    let result = await Breed.find().lean();
    return result;
};

exports.getOne = (breedId) => Breed.findById(breedId);

exports.create = (breedData) => {
    const breed = new Breed(breedData);

    return breed.save();
}
