const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/gaming-team-1'; // change name to use a new DB

async function dbConnect() {
    await mongoose.connect(uri);
}

module.exports = dbConnect;