const carService = require('./03. Car Service_Resources');
const { expect, assert } = require('chai');

describe('Testing -> carService', () => {
    it('Testting -> isItExpensive', () => {
        expect(carService.isItExpensive('aaaa')).to.equal('The overall price will be a bit cheaper');
        expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive(100)).to.equal('The overall price will be a bit cheaper');
        expect(carService.isItExpensive(-100)).to.equal('The overall price will be a bit cheaper');
        expect(carService.isItExpensive([])).to.equal('The overall price will be a bit cheaper');
        expect(carService.isItExpensive(100, 100)).to.equal('The overall price will be a bit cheaper');
        expect(carService.isItExpensive('Test', 'Test')).to.equal('The overall price will be a bit cheaper');
        expect(carService.isItExpensive({})).to.equal('The overall price will be a bit cheaper');
    });
    it('Testing -> discount', () => {
        expect(carService.discount(5, 50)).to.equal('Discount applied! You saved 7.5$');
        expect(carService.discount(5, 3)).to.equal('Discount applied! You saved 0.44999999999999996$');
        expect(carService.discount(3, -30)).to.equal('Discount applied! You saved -4.5$');
        expect(carService.discount(-3, -30)).to.equal('You cannot apply a discount');
        expect(carService.discount(-3, 30)).to.equal('You cannot apply a discount');
        expect(carService.discount(70, 8)).to.equal('Discount applied! You saved 2.4$');
        expect(carService.discount(70, -8)).to.equal('Discount applied! You saved -2.4$');
        expect(() => { carService.discount('', -8) }).to.throw('Invalid input');
        expect(() => { carService.discount('', '') }).to.throw('Invalid input');
        expect(() => { carService.discount(5, '') }).to.throw('Invalid input');
        expect(() => { carService.discount('', []) }).to.throw('Invalid input');
    });
    it('Testing -> partsToBuy', () => {
        expect(carService.partsToBuy(['p1', 'p2', 'p3'], ['p1', 's1'])).to.equal(0);
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145);
        expect(carService.partsToBuy([], ['p1', 's1'])).to.equal(0);
        expect(carService.partsToBuy(['p1', 'p2', 'p3'], [])).to.equal(0);
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors", "coil springs"])).to.equal(375);
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ['p1', 'p3'])).to.equal(0);
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 0 }, { part: "coil springs", price: 230 }], ['blowoff valve'])).to.equal(0);
        expect(() => { carService.partsToBuy([], '') }).to.throw('Invalid input');
        expect(() => { carService.partsToBuy('', '') }).to.throw('Invalid input');
        expect(() => { carService.partsToBuy(0, []) }).to.throw('Invalid input');
        expect(carService.partsToBuy([], [])).to.equal(0);
    });
});


// expect(() => { }).to.throw();
// expect().to.equal();