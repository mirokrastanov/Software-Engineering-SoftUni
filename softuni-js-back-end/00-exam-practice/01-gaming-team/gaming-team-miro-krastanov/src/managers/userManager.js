const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateToken } = require('../util/tokenHelpers');


exports.login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid email or password');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error('Invalid email or password');

    const token = await generateToken(user);
    return token;
};

exports.register = async (userData) => {
    const username = await User.findOne({ username: userData.username });
    if (username) throw new Error('Username already exists');

    const email = await User.findOne({ email: userData.email });
    if (email) throw new Error('Email already in use');

    await User.create(userData);
};


