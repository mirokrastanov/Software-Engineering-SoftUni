const bcrypt = require('bcrypt');
const User = require('../models/User');
const { genToken } = require('../util/token');


exports.login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid user or password');

    const passIsValid = await bcrypt.compare(password, user.password);
    if (!passIsValid) throw new Error('Invalid user or password');

    return await genToken(user);
};

exports.register = async (userData) => {
    const emailExists = await User.findOne({ email: userData.email });
    if (emailExists) throw new Error('Email already exists');

    const registeredUser = await User.create(userData);
    return await genToken(registeredUser);
};

exports.getUserObject = (userId) => User.findById(userId);
