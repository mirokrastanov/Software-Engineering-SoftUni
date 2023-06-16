const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'Name is too short!'],
    },
    image: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Invalid URL'],
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price should be a positive number!'],
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description is too short!'],
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    buyers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, { collection: 'crypto' });

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;