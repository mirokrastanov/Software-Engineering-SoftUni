const PaymentPackage = require('./12-payment-package');
const { expect, assert } = require('chai');

describe("Test Class creation", function () {
    it("VALID input tests", () => {
        let test = new PaymentPackage('HR', 10);
        assert.equal(test._name, 'HR');
        assert.equal(test._value, 10);
        assert.doesNotThrow(() => test.value = 0);
        assert.equal(test._VAT, 20);
        assert.equal(test._active, true);
    });
    it("INVALID input tests", () => {
        assert.throws(() => new PaymentPackage('', 110), Error);
        assert.throws(() => new PaymentPackage(100, 110), Error);
        assert.throws(() => new PaymentPackage('ads', 'abc'), Error);
        assert.throws(() => new PaymentPackage('ads', -110), Error);
        assert.throws(() => new PaymentPackage('ads', []), Error);
        assert.throws(() => new PaymentPackage('ads', {}), Error);
        assert.throws(() => new PaymentPackage([], 110), Error);
        assert.throws(() => new PaymentPackage({}, 110), Error);

    });
    it("set new VALID values", () => {
        let test = new PaymentPackage('Test', 1000);
        test.VAT = 40;
        assert.equal(test.VAT, 40);
        test.active = false;
        assert.equal(test.active, false);
        test.name = 'Gosho';
        assert.equal(test.name, 'Gosho');
        test.value = 500;
        assert.equal(test.value, 500);
        let expectedStr = `Package: Gosho (inactive)\n- Value (excl. VAT): 500\n- Value (VAT 40%): 700`;
        assert.equal(test.toString(), expectedStr);
        test.active = true;
        let expectedStr2 = `Package: Gosho\n- Value (excl. VAT): 500\n- Value (VAT 40%): 700`;
        assert.equal(test.toString(), expectedStr2);
        test.VAT = 10;
        let expectedStr3 = `Package: Gosho\n- Value (excl. VAT): 500\n- Value (VAT 10%): 550`;
        assert.equal(test.toString(), expectedStr3);
    });
    it("set new INVALID values", () => {
        let test = new PaymentPackage('Test', 1000);
        assert.throws(() => test.VAT = -40, Error);
        assert.throws(() => test.VAT = '40', Error);
        assert.throws(() => test.active = 1, Error);
        assert.throws(() => test.active = 'da', Error);
        assert.throws(() => test.value = -10, Error);
        assert.throws(() => test.value = 'daa', Error);
        assert.throws(() => test.name = 12, Error);
        assert.throws(() => test.name = '', Error);
    });

});
