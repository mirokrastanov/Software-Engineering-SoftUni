const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'], // custom message if default is not suitable
        minLength: [5, 'Username is too short!'],
        match: [/^[A-Za-z0-9]+$/, 'Username must be alphanumeric using only latin letters!'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: {
            validator: function(value) {
                return /^[A-Za-z0-9]+$/.test(value);
            },
            message: 'Invalid password characters!',
        },
        minLength: [8, 'Password is too short!'],
    },
});

userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new mongoose.MongooseError('Password missmatch!');
        }
    })

userSchema.pre('save', async function () { // prior to db saving - this handler is activated
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
