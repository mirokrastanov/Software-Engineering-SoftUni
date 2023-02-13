const isOddOrEven = require('./02');
const { expect, assert } = require('chai');

describe('main test group', function () {
    it('is not an object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('is not an array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('is not a function', () => {
        assert.equal(isOddOrEven(() => { }), undefined);
    });
    it('is not null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    it('is odd', () => {
        expect(isOddOrEven('str')).to.equal('odd');
    });
    it('is even', () => {
        expect(isOddOrEven('stri')).to.equal('even');
    });
    it('is odd', () => {
        expect(isOddOrEven('s t r')).to.equal('odd');
    });

});