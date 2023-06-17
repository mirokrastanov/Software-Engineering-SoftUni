const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: [true, 'Headline is required!'],
        minLength: [4, 'Headline is too short!'],
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [8, 'Location is too short!'],
    },
    companyName: {
        type: String,
        required: [true, 'Company name is required!'],
        minLength: [3, 'Company name is too short!'],
    },
    companyDescription: {
        type: String,
        required: [true, 'Company descroption is required!'],
        maxLength: [40, 'Company description is too long!'],
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    applicants: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
}, { collection: 'ads' });

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;
