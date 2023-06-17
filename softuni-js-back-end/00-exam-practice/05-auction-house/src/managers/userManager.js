const bcrypt = require('bcrypt');
const User = require('../models/User');
const { genToken } = require('../util/token');

// TODO: Adjust according to requirements!

exports.login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid user or password');

    const passIsValid = await bcrypt.compare(password, user.password);
    if (!passIsValid) throw new Error('Invalid user or password');

    return await genToken(user);
};

exports.register = async (userData) => {
    const userExists = await User.findOne({ email: userData.email });
    if (userExists) throw new Error('Username already exists');

    await User.create(userData);
};

exports.getUserObject = (userId) => User.findById(userId);
