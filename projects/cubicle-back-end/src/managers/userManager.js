const bcrypt = require('bcrypt');

const jwt = require('../lib/jwt');
const User = require('../models/User');

const SECRET = 'd51271f9fa2f51b6be67f99739301f3541cc547d05b36f433096eaa2396dad5c';

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    // find user
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('Cannot find username or password');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Cannot find username or password');
    }

    const payload = {
        _id: user._id,
        username: user.username,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });

    return token;
};