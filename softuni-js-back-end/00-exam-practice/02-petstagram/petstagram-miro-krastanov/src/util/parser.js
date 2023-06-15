const userManager = require('../managers/userManager');

exports.genNames = async function (photos) {
    let output = await photos.slice();

    await output.map(async (x) => {
        const user = await userManager.getUser(x.owner);
        if (user) x.ownerName = user.username;
        else x.ownerName = 'user'
        return x;
    });

    return output;
}

exports.addUsernames = async function (comments) {
    let output = await comments.slice();

    await output.map(async (x) => {
        const user = await userManager.getUser(x.userID);
        if (user) x.username = user.username;
        else x.username = 'user';
        return x;
    });

    return output;
}