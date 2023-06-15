const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
    },
    platform: {
        type: String,
        required: [true, 'Platform is required!'],
    },
    boughtBy: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, { collection: 'games' });

gameSchema.pre('save', function () {
    const platforms = [
        'PC',
        'Nintendo',
        'PS4',
        'PS5',
        'XBOX',
    ];
    let validPlatform = false;
    platforms.forEach(x => {
        if (x == this.platform) validPlatform = true;
    });
    if (!validPlatform) throw new Error('Invalid platform');
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
