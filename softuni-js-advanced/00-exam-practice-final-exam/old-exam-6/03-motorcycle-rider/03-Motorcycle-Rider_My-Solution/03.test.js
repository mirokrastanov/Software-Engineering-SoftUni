const motorcycleRider = require('./Motorcycle_Rider');
const { expect, assert } = require('chai');

describe('Testing -> motorcycleRider', () => {
    it('Testing -> licenseRestriction', () => {
        expect(() => { motorcycleRider.licenseRestriction('aM') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.licenseRestriction('a') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.licenseRestriction('a1') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.licenseRestriction('a2') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.licenseRestriction('aaa') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.licenseRestriction('a') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.licenseRestriction('') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.licenseRestriction(1) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.licenseRestriction(['A']) }).to.throw('Invalid Information!');
        expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
    });
    it('Testing -> motorcycleShowroom', () => {
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], -1001) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], 49.9) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], '') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], '3000') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], []) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], [300]) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], ['300']) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom([], 300) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom('', 300) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom('', '') }).to.throw('Invalid Information!');
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], 300)).to.equal('There are 2 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], 100)).to.equal('There are 0 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], 700)).to.equal('There are 3 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], 600)).to.equal('There are 3 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], 599.99)).to.equal('There are 2 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], 1001)).to.equal('There are 4 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], 50)).to.equal('There are 0 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([''], 500)).to.equal('There are 0 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([100, 200], 300)).to.equal('There are 2 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom(['125', '250', '600', '1000'], 50)).to.equal('There are 0 available motorcycles matching your criteria!');
    });
    it('Testing -> otherSpendings', () => {
        expect(motorcycleRider.otherSpendings([], [], false)).to.equal('You spend $0.00 for equipment and consumables!');
        expect(motorcycleRider.otherSpendings([], [], true)).to.equal('You spend $0.00 for equipment and consumables with 10% discount!');
        expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
        expect(motorcycleRider.otherSpendings(['helmet', 'ja'], ['oil', 'oil filter'], true)).to.equal('You spend $207.00 for equipment and consumables with 10% discount!');
        expect(motorcycleRider.otherSpendings(['helmet', 'ja'], ['oil', 'oil filter'], false)).to.equal('You spend $230.00 for equipment and consumables!');
        expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], false)).to.equal('You spend $230.00 for equipment and consumables!');
        expect(() => { motorcycleRider.otherSpendings([], [], '')}).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings([], '', false)}).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings('', [], false)}).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings([], [], 1)}).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings([], 1, 1)}).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(true, true, false)}).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(1, '', [])}).to.throw('Invalid Information!');
    });
});

// expect(() => { }).to.throw();
// expect().to.equal();