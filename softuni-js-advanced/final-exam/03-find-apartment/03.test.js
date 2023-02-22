const findNewApartment = require('./findApartment');
const { expect, assert } = require('chai');

describe('Testing -> findNewApartment', () => {
    it('Testing -> isGoodLocation', () => {
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        expect(findNewApartment.isGoodLocation('Manchester', true)).to.equal('This location is not suitable for you.');
        expect(findNewApartment.isGoodLocation('', true)).to.equal('This location is not suitable for you.');
        expect(findNewApartment.isGoodLocation('', false)).to.equal('This location is not suitable for you.');
        expect(() => { findNewApartment.isGoodLocation('Varna', '') }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isGoodLocation('', '') }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isGoodLocation(3, false) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isGoodLocation('Varna') }).to.throw('Invalid input!');
    });
    it('Testing -> isLargeEnough', () => {
        expect(findNewApartment.isLargeEnough([40, 50, 60], 9.2)).to.equal('40, 50, 60');
        expect(findNewApartment.isLargeEnough([40, 50, 60], 92)).to.equal('');
        expect(findNewApartment.isLargeEnough([40, 50, 60], 49)).to.equal('50, 60');
        expect(findNewApartment.isLargeEnough([40, 50, 60], -9)).to.equal('40, 50, 60');
        expect(findNewApartment.isLargeEnough(['40', '50', '60'], 20)).to.equal('40, 50, 60');
        expect(findNewApartment.isLargeEnough([''], 20)).to.equal('');
        expect(findNewApartment.isLargeEnough([-10], 20)).to.equal('');
        expect(() => { findNewApartment.isLargeEnough([], 20) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough([], '') }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough('', 20) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough('', true) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough([], '20') }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough(20, 20) }).to.throw('Invalid input!');
    });
    it('Testing -> isItAffordable', () => {
        expect(findNewApartment.isItAffordable(300, 900)).to.equal('You can afford this home!');
        expect(findNewApartment.isItAffordable(300, 300)).to.equal('You can afford this home!');
        expect(findNewApartment.isItAffordable(1300, 900)).to.equal('You don\'t have enough money for this house!');
        expect(() => { findNewApartment.isItAffordable(0, 900) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(0, 0) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(0, -1) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(-1, 0) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(-3.2, -1.2) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(3.2, -2.1) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(0, '') }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable([], []) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(true, 900) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable('300', 900) }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(300, '900') }).to.throw('Invalid input!');
    });
});

// expect(() => { }).to.throw();
// expect().to.equal();