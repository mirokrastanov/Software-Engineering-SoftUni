const Auction = require('../models/Auction');

exports.getAll = async (search, platform) => {
    let result = await Auction.find().populate('bidder').populate('author').lean();
    if (search) result = result.filter(auction => auction.email.toLowerCase().includes(search.toLowerCase()));
    if (platform) result = result.filter(auction => auction.platform.toLowerCase() == platform.toLowerCase());
    return result;
};

exports.create = (auctionData) => {
    const auction = new Auction(auctionData);
    return auction.save();
};

exports.getOne = (auctionId) => Auction.findById(auctionId).populate('bidder').populate('author').lean();

exports.placeBid = async (auctionId, userId, currentBid, bid) => {
    const auction = await Auction.findById(auctionId);
    if (currentBid < bid) {
        auction.bidder = userId;
        auction.bid = bid;
        auction.save();
        return true;
    } else {
        return false;
    }
};

exports.hasBidder = async (auctionId) => {

};

// exports.hasBought = (auction, isGuest, userId) => {
//     let hasBought = false;
//     if (!isGuest) {
//         if (auction.boughtBy && auction.boughtBy.length > 0) {
//             let result = auction.boughtBy.find(x => x == userId);
//             if (result) hasBought = result == userId;
//         }
//     }
//     return hasBought;
// }

exports.delete = (auctionId) => Auction.findByIdAndDelete(auctionId);

exports.update = (auctionId, auctionData) => Auction.findByIdAndUpdate(auctionId, auctionData);