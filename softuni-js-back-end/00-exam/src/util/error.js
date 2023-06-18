const { MongooseError } = require("mongoose");

exports.getMessageArray = (err) => {
    if (err instanceof MongooseError) {
        return Object.values(err.errors).map(thisError => thisError.message);
    } else if (err) {
        return [err.message];
    }
}
