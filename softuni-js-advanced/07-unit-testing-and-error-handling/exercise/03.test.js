const { expect, assert } = require('chai');
const lookupChar = require('./03');

describe('main', () => {
    it('return single string', () => {
        expect(lookupChar('Love', 1)).to.equal('o');
    });
    it('index, greater than max length', () => {
        assert(lookupChar('Love', 10), undefined);
    });
    it('index, lower than 0', () => {
        assert(lookupChar('Love', -2), undefined);
    });
    it('single char', () => {
        expect(lookupChar('L', 0)).to.equal('L');
    });
    it('empty string', () => {
        assert(lookupChar('', 0), 'Incorrect Index');
    });
    it('not a string', () => {
        assert(lookupChar([], 0) === undefined);
    });
    it('not a number', () => {
        assert(lookupChar('Love', 10), 'Incorrect Index');
    });
    it('not a number', () => {
        assert(lookupChar('L', 'sr') === undefined);
    });
    it('both invalid', () => {
        assert(lookupChar(0, 0) === undefined);
    });
    it('both invalid', () => {
        assert(lookupChar(190, 10) === undefined);
    });
    it('both invalid', () => {
        assert(lookupChar('Love', 10.5) === undefined);
    });
    it('valid index', () => {
        assert(lookupChar('Love', 2), 'v');
    });
    it('empty string', () => {
        assert(lookupChar('', 1), undefined);
    });
    it('empty string', () => {
        assert(lookupChar('', -10), 'Incorrect Index');
    });
    it('empty string', () => {
        assert(lookupChar('Love', -10), 'Incorrect Index');
    });
});