const Animal = require('../models/Animal');

exports.getAll = async (location) => {
    let result = await Animal.find().populate('donations').populate('owner').lean();
    if (location) result = result.filter(animal => animal.location.toLowerCase().includes(location.toLowerCase()));
    return result;
};

exports.create = (animalData) => {
    const animal = new Animal(animalData);
    return animal.save();
};

exports.getOne = async (animalId) => await Animal.findById(animalId).populate('donations').populate('owner').lean();

exports.donate = async (animalId, userId) => {
    return await Animal.findByIdAndUpdate(animalId, { $push: { donations: userId } });
};

exports.hasDonated = (animal, userId) => {
    let hasDonatedFlag = false;
    let donations = animal.donations.slice();
    if (donations.length == 0) return hasDonatedFlag;
    else {
        donations = donations.filter(x => x._id == userId);
        if (donations.length == 0) return hasDonatedFlag;
        else return true;
    }
}

exports.delete = (animalId) => Animal.findByIdAndDelete(animalId);

exports.update = async (animalId, animalData) => {
    try {
        let animal = new Animal(animalData);
        let saved = await animal.save();

        await Animal.findByIdAndDelete(saved._id);
        await Animal.findByIdAndUpdate(animalId, animalData);
    } catch (error) {
        return error;
    }
};

// THIS WORKS - But I found it on the day AFTER the exam... :D Thankfully the workaround above didn't take more than a few min to implement.
// exports.update = (animalId, animalData) => Animal.findByIdAndUpdate(animalId, animalData, { runValidators: true });