const { SECRET } = require('../config/constants');
const jwt = require('../lib/jwt');


exports.generateToken = async function (user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });
    return token;
}