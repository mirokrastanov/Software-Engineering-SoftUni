const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [4, 'Title too short'],
        unique: {
            value: true,
            message: 'Title already exists!',
        },
    },
    description: {
        type: String,
        maxLength: [200, 'Description is too long!'],
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        minLength: [4, 'Password is too short!'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Price should be a positive number!'],
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    bidder: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    bid: {
        type: Number,
        min: [0, 'Big must be a positive number!'],
    },
    closed: {
        type: Boolean,
    }
}, { collection: 'auctions' });

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
