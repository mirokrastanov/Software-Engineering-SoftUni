const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/(?<name>[A-Za-z]+)@(?<domain>[A-Za-z]+).(?<ext>[A-Za-z]+)/, 'Email invalid'],
        unique: {
            value: true,
            message: 'Email already exists!',
        },
    },
    firstName: {
        type: String,
        required: [true, 'First name is required!'],
        minLength: [1, 'First name is too short!'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!'],
        minLength: [1, 'Last name is too short!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [5, 'Password is too short!'],
    },
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
