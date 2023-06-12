const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find();

exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getNotAttached = (accessoryIds) => Accessory.find({ _id: { $nin: accessoryIds } }); // find all, that are not already inside the accessoryIds array
