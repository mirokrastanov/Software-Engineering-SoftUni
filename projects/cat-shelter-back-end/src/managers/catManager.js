const Cat = require('../models/Cat');

exports.getAll = async (search) => {
    let dbCats = await Cat.find().lean();
    let result = [];

    // TODO: Use mongoose to filter in the db
    if (search) {
        let names = dbCats.slice().filter(cat => cat.name.toLowerCase().includes(search.toLowerCase()));
        let breeds = dbCats.slice().filter(cat => cat.breed.toLowerCase().includes(search.toLowerCase()));
        let descriptions = dbCats.slice().filter(cat => cat.description.toLowerCase().includes(search.toLowerCase()));
        result = [...names, ...breeds, ...descriptions];
        result = result.filter((v, i, arr) => arr.indexOf(v) == i); // unique array elements
    } else result = [...dbCats];
    return result;
};

exports.getOne = (catId) => Cat.findById(catId);

exports.create = (catData) => {
    const cat = new Cat(catData);

    return cat.save();
}

exports.edit = async (catId, name, description, img, breed) => {
    return Cat.findByIdAndUpdate(catId, {
        $set: { name, description, img, breed }
    })
};

exports.remove = (catId) => Cat.findByIdAndDelete(catId);