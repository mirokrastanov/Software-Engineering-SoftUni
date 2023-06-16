const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: [true, 'Headline is required!'],
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
    },
    companyName: {
        type: String,
        required: [true, 'Company name is required!'],
    },
    companyDescription: {
        type: String,
        required: [true, 'Company descroption is required!'],
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

adSchema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new Error('Password missmatch!');
        }
    })

adSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;
