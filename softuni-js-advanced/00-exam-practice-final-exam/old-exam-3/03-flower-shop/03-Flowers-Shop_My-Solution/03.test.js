const flowerShop = require('./flowerShop');
const { expect, assert } = require('chai');

describe('testing -> flowerShop', () => {
    it('testing -> calcPriceOfFlowers', () => {
        expect(() => { flowerShop.calcPriceOfFlowers(3, '', 1) }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers([], 3, '') }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers('', 3, []) }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers(2, '', '') }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers('', '', '') }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers('', '', 3.9) }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers('', 4, -4.1) }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers('', -5.2, 9) }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers('', 1.2, 7.4) }).to.throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers('lily', 7, 3)).to.equal('You need $21.00 to buy lily!');
        expect(flowerShop.calcPriceOfFlowers('lily', -3, 80)).to.equal('You need $-240.00 to buy lily!');
        expect(flowerShop.calcPriceOfFlowers('lily', 3, -16)).to.equal('You need $-48.00 to buy lily!');
        expect(flowerShop.calcPriceOfFlowers('', 3, -1)).to.equal('You need $-3.00 to buy !');
    });
    it('testing -> checkFlowersAvailable', () => {
        expect(() => { flowerShop.checkFlowersAvailable('lily', 3) }).to.throw('gardenArr.indexOf is not a function');
        expect(() => { flowerShop.checkFlowersAvailable('lily', {}) }).to.throw('gardenArr.indexOf is not a function');
        expect(() => { flowerShop.checkFlowersAvailable({}, {}) }).to.throw('gardenArr.indexOf is not a function');
        expect(() => { flowerShop.checkFlowersAvailable(-1, -1) }).to.throw('gardenArr.indexOf is not a function');
        expect(flowerShop.checkFlowersAvailable('lily', ['lily', 'rose', 'orchid'])).to.equal('The lily are available!');
        expect(flowerShop.checkFlowersAvailable('lily', ['rose', 'orchid'])).to.equal('The lily are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable(3, ['lily', 'rose', 'orchid'])).to.equal('The 3 are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable([], ['lily', 'rose', 'orchid'])).to.equal('The  are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable({}, ['lily', 'rose', 'orchid'])).to.equal('The [object Object] are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable(function () { }, ['lily', 'rose', 'orchid'])).to.equal('The function () { } are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable('lily', [])).to.equal('The lily are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable('lily', '')).to.equal('The lily are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable('lily', ['lily', 'lily'])).to.equal('The lily are available!');
    });
    it('testing -> sellFlowers', () => {
        expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 10) }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1) }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3.42) }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '') }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], []) }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], {}) }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers([], 0) }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers([], -1) }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers('', 0) }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers('', 0.3) }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers('', '') }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers(['lily'], []) }).to.throw('Invalid input!');
        expect(() => { flowerShop.sellFlowers(['lily'], {}) }).to.throw('Invalid input!');
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
        expect(flowerShop.sellFlowers(["", "Lily", "Orchid"], 1)).to.equal(' / Orchid');
        expect(flowerShop.sellFlowers(["", "Lily", "Orchid"], 2)).to.equal(' / Lily');
    });
});


// expect(() => { }).to.throw();
// expect().to.equal();