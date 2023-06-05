const mongoose = require('mongoose');

const breedSchema = {
    name: String,
};

const Breed = mongoose.model('Breed', breedSchema);

module.exports = Breed;
