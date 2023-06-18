const Auction = require('../models/Auction');

exports.getAll = async (closed = false, userId) => {
    let result = await Auction.find().populate('bidder').populate('author').lean();
    if (closed) {
        result = result.filter(x => x.closed == true);
        result = result.filter(x => x.author._id == userId);
    } else {
        result = result.filter(x => x.closed != true);
    }
    return result;
};

exports.create = (auctionData) => {
    const auction = new Auction(auctionData);
    return auction.save();
};

exports.getOne = (auctionId) => Auction.findById(auctionId).populate('bidder').populate('author').lean();

exports.placeBid = async (auction, userId, bid) => {
    bid = Number(bid);
    if (userId == auction.author._id) return 'You cannot bid on your own auction!';
    if (!auction.bidder || (auction.bidder && auction.price < bid)) {
        await this.update(auction._id, { bidder: userId, price: bid });
        return 'success';
    }
    return `Bid is not enough! Current price is: $${auction.price}`;
};

exports.canBid = async (auction, userId) => {
    if (userId == auction.author._id) return 'You cannot bid on your own auction!';
    else if (userId == auction.bidder?._id) return 'You are the current highest bidder!';
    return 'success';
};


exports.delete = (auctionId) => Auction.findByIdAndDelete(auctionId);

exports.update = (auctionId, auctionData) => Auction.findByIdAndUpdate(auctionId, auctionData);