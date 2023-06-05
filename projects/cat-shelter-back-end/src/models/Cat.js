const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    breed: String,
}, { collection: 'cats' });

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
