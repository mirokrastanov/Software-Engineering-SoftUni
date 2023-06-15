const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name is too short!'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
    },
    commentList: [{
        userID: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
        comment: {
            type: String,
        },
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, { collection: 'photos' });

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
