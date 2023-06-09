const mongoose = require('mongoose');

const cubeSchema = {
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory', // related to the name from Accessory.js on line 9, model paramter 1
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
};

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
