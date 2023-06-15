const Game = require('../models/Game');
const User = require('../models/User');


exports.getAllGames = async (search, platform) => {
    let result = await Game.find().lean();

    if (search) {
        result = result.filter(game => game.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (platform) {
        result = result.filter(game => game.platform.toLowerCase() == platform.toLowerCase());
    }
    return result;
};

exports.create = (gameData) => {
    const game = new Game(gameData);

    return game.save();
};

exports.getOne = (gameId) => Game.findById(gameId);

exports.buyGame = async (gameId, userId) => {
    return Game.findByIdAndUpdate(gameId, { $push: { boughtBy: userId } });
};

exports.hasBoughtGame = (game, isGuest, userId) => {
    let hasBought = false;
    if (!isGuest) {
        if (game.boughtBy && game.boughtBy.length > 0) {
            let result = game.boughtBy.find(x => x == userId);
            if (result) hasBought = result == userId;
        }
    }
    return hasBought;
}

exports.delete = (gameId) => Game.findByIdAndDelete(gameId);

exports.update = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

