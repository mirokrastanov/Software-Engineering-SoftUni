const mathEnforcer = require('./04');
const { expect, assert } = require('chai');

describe('test object methods', function () {
    describe('method addFive', () => {
        // negative
        it('object', () => {
            assert(mathEnforcer.addFive({}) == undefined);
        });
        it('null', () => {
            assert(mathEnforcer.addFive(null) == undefined);
        });
        it('string', () => {
            assert(mathEnforcer.addFive('stri') == undefined);
        });
        it('array', () => {
            assert(mathEnforcer.addFive([]) == undefined);
        });
        it('undefined', () => {
            assert(mathEnforcer.addFive(undefined) == undefined);
        });
        // positive
        it('positive sum', () => {
            assert(mathEnforcer.addFive(3) == 8);
        });
        it('negative num', () => {
            assert(mathEnforcer.addFive(-3) == 2);
        });
        it('floating sum', () => {
            assert(mathEnforcer.addFive(5.5) == 10.5);
        });
    });
    describe('method subtractTen', () => {
         // negative
         it('object', () => {
            assert(mathEnforcer.subtractTen({}) == undefined);
        });
        it('null', () => {
            assert(mathEnforcer.subtractTen(null) == undefined);
        });
        it('string', () => {
            assert(mathEnforcer.subtractTen('stri') == undefined);
        });
        it('array', () => {
            assert(mathEnforcer.subtractTen([]) == undefined);
        });
        it('undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) == undefined);
        });
        // positive
        it('positive sum', () => {
            assert(mathEnforcer.subtractTen(3) == -7);
        });
        it('negative num', () => {
            assert(mathEnforcer.subtractTen(-3) == -13);
        });
        it('floating sum', () => {
            assert(mathEnforcer.subtractTen(15.5) == 5.5);
        });
    });
    describe('method sum', () => {
        // correct inputs
        it('positive sum', () => {
            assert(mathEnforcer.sum(15, 15) == 30);
        });
        it('negative sum', () => {
            assert(mathEnforcer.sum(-10, -5) == -15);
        });
        it('floating sum', () => {
            assert(mathEnforcer.sum(15.5, 5.5) == 21);
        });
        // incorrect inputs
        it('floating sum', () => {
            assert(mathEnforcer.sum('', 5) == undefined);
        });
        it('floating sum', () => {
            assert(mathEnforcer.sum(15, '') == undefined);
        });
    });
});
