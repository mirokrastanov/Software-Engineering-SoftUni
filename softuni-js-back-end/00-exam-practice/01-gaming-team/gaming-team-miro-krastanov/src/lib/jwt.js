const jsonwebtoken = require('jsonwebtoken');

const jwt = {
    sign: (payload, secret, options) => {
        return new Promise((resolve, reject) => {
            jsonwebtoken.sign(payload, secret, options, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
    verify: (token, secret) => {
        return new Promise((resolve, reject) => {
            jsonwebtoken.verify(token, secret, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
};

module.exports = jwt;