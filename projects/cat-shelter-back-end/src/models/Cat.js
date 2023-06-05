const mongoose = require('mongoose');

const catSchema = {
    name: String,
    description: String,
    imageUrl: String,
    breed: String,
};

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
