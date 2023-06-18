// TODO: DELETE before submission - this is just AN EXAMPLE to look at

const mongoose = require('mongoose');
const catSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    breed: String,
    commentList: [{
        userID: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
        comment: {
            type: String,
        },
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, { collection: 'cats' }); // SET SPECIFIC COLLECTION name

const Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;

