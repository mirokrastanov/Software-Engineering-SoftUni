const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters!'],
    },
    years: {
        type: Number,
        required: [true, 'Years are required!'],
        min: [1, 'Years should be greater than 1!'],
        max: [100, 'Years should be fewer than 100!'],
    },
    kind: {
        type: String,
        required: [true, 'Kind is required!'],
        minLength: [3, 'Kind should be at least 3 characters!'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'Invalid image URL!'],
    },
    need: {
        type: String,
        required: [true, 'Need is required!'],
        minLength: [3, 'Need should be at least 3 characters!'],
        maxLength: [20, 'Need should fit within 20 characters!'],
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [5, 'Location should be at least 5 characters!'],
        maxLength: [15, 'Location should fit within 15 characters!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Description should be at least 5 characters!'],
        maxLength: [50, 'Description should fit within 50 characters!'],
    },
    donations: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, { collection: 'animals' });

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
