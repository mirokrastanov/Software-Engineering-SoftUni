const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/(?<name>[A-Za-z]+)@(?<domain>[A-Za-z]+).(?<ext>[A-Za-z]+)/m, 'Email format invalid'],
        unique: {
            value: true,
            message: 'Email already exists!',
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [5, 'Password is too short!'],
    },
    description: {
        type: String,
        required: [true, 'Description required!'],
        maxLength: [40, 'Description is too long!'],
    },
    ads: [{
        type: mongoose.Types.ObjectId,
        ref: 'Ad',
    }],
}, { collection: 'users' });

userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new Error('Password missmatch!');
        }
    })

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
