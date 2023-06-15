const Photo = require('../models/Photo');

exports.getPhotos = async () => {
    let result = await Photo.find().lean();
    return result;
};
exports.createPhoto = (photoData) => {
    const photo = new Photo(photoData);
    return photo.save();
};
exports.getOne = (photoId) => Photo.findById(photoId);

exports.postComment = async (photoId, userID, comment) => {
    return Photo.findByIdAndUpdate(photoId, {
        $push: {
            commentList: {
                userID,
                comment,
            }
        }
    });
};

exports.delete = (photoId) => Photo.findByIdAndDelete(photoId);

exports.update = (photoId, photoData) => Photo.findByIdAndUpdate(photoId, photoData);

