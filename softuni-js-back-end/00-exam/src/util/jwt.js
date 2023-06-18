const jwtRAW = require('jsonwebtoken');

const jwt = {
    sign: (payload, secret, options) => {
        return new Promise((resolve, reject) => {
            jwtRAW.sign(payload, secret, options, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    },
    verify: (token, secret) => {
        return new Promise((resolve, reject) => {
            jwtRAW.verify(token, secret, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    },
};

module.exports = jwt;