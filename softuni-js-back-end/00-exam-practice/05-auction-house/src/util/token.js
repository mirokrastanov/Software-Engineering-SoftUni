const { SECRET } = require('../config/constants');
const jwt = require('./jwt');


exports.genToken = async function (user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };
    const token = await jwt.sign(payload, SECRET, { expiresIn: '3d' });
    return token;
}