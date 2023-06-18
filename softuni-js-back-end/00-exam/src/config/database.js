const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/exam-adrenaliin'; // TODO: Edit suffix name

exports.connect = async function () {
    await mongoose.connect(uri);
}
