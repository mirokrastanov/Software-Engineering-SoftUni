const { expect } = require('chai');
const sum = require('./appFinal.js');

describe('Main test', function () {
    it('works with whole numbers', function () {
        expect(sum(3, 5)).to.equal(8);
        /* assert.equal(sum(0.1, 0.2), 0.3);    --- this is the ASSERT syntex - doing the same as above line */
    });
    it('works with floating-point numbers', function () {
        expect(sum(0.1, 0.2)).to.closeTo(0.3, 0.00001);
    });
    it('took non-number parameters', () => {
        // expect(() => sum('a', 'b')).to.throw(TypeError);
        expect(() => sum('a', 'b')).to.throw();
    });
});