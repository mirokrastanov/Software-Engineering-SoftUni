const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/exam-adrenaliin-friendly-world-1';

exports.connect = async function () {
    await mongoose.connect(uri);
}
