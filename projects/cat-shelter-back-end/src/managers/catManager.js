const Cat = require('../models/Cat');

exports.getAll = async (search) => {
    let result = await Cat.find().lean();

    // TODO: Use mongoose to filter in the db
    if (search) {
        result = result.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase()));
    }
    return result;
};

exports.getOne = (catId) => Cat.findById(catId);

exports.create = (catData) => {
    const cat = new Cat(catData);

    return cat.save();
}
