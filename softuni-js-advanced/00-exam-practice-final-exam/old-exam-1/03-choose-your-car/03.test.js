const chooseYourCar = require('./chooseYourCar');
const { expect, assert } = require('chai');

describe('testing -> chooseYourCar', function () {
    describe('testing -> choosingType', function () {
        it('invalid type argument', function () {
            expect(() => chooseYourCar.choosingType(0, 'blue', 1920)).to.throw(`This type of car is not what you are looking for.`);
        });
        it('year as string', function () {
            expect(chooseYourCar.choosingType('Sedan', 'blue', "2002")).to.equal('This Sedan is too old for you, especially with that blue color.');
        });
        it('all 3 valid params', function () {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2002)).to.equal(`This Sedan is too old for you, especially with that blue color.`)
        });
        it('valid inputs - edge case - up', function () {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2022)).to.equal('This blue Sedan meets the requirements, that you have.');
        });
        it('valid inputs - edge case - down', function () {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 1900)).to.equal('This Sedan is too old for you, especially with that blue color.');
        });
        it('invalid type of car - throws error', function () {
            expect(() => chooseYourCar.choosingType('Pick-up', 'orange', 1922)).to.throw('This type of car is not what you are looking for.');
        });
        it('invalid year - down', function () {
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 1800)).to.throw('Invalid Year!');
        });
        it('invalid year - up', function () {
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 2300)).to.throw('Invalid Year!');
        });
        it('invalid year type', function () {
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', [])).to.throw('Invalid Year!');
        });
        it('case 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
        })
    });
    describe('testing -> brandName', function () {
        it('valid inputs', function () {
            expect(chooseYourCar.brandName(['bmw', 'chevy', 'dodge', 'kia'], 2)).to.equal('bmw, chevy, kia');
        });
        it('invalid index - too high', function () {
            expect(() => chooseYourCar.brandName(['bmw', 'chevy', 'dodge', 'kia'], 8)).to.throw("Invalid Information!");
        });
        it('invalid index - too low', function () {
            expect(() => chooseYourCar.brandName(['bmw', 'chevy', 'dodge', 'kia'], -1)).to.throw("Invalid Information!");
        });
        it('invalid index - not an Integer', function () {
            expect(() => chooseYourCar.brandName(['bmw', 'chevy', 'dodge', 'kia'], 3.2)).to.throw("Invalid Information!");
        });
        it('invalid args - not an array', function () {
            expect(() => chooseYourCar.brandName('bmw', 1)).to.throw("Invalid Information!");
            expect(() => { chooseYourCar.brandName(['Mazda'], 'a') }).to.throw('Invalid Information!');  // 1
            expect(() => { chooseYourCar.brandName(['Mazda'], 1) }).to.throw('Invalid Information!');

        });
    });
    describe('testing -> carFuelConsumption', function () {
        it('valid input - case - inefficient', function () {
            expect(chooseYourCar.carFuelConsumption(1000, 80)).to.equal("The car burns too much fuel - 8.00 liters!");
        });
        it('valid inout - case - efficient', function () {
            expect(chooseYourCar.carFuelConsumption(1000, 60)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.');
        });
        it('wrong type 1st param', function () {
            expect(() => chooseYourCar.carFuelConsumption([], 60)).to.throw('Invalid Information!');
        });
        it('negative 1st param', function () {
            expect(() => chooseYourCar.carFuelConsumption(-130, 60)).to.throw('Invalid Information!');
        });
        it('1st param = 0', function () {
            expect(() => chooseYourCar.carFuelConsumption(0, 60)).to.throw('Invalid Information!');
        });
        it('wrong type 2nd param', function () {
            expect(() => chooseYourCar.carFuelConsumption(1000, "da")).to.throw('Invalid Information!');
        });
        it('2nd param = 0', function () {
            expect(() => chooseYourCar.carFuelConsumption(1000, 0)).to.throw('Invalid Information!');
        });
        it('2nd param is negative', function () {
            expect(() => chooseYourCar.carFuelConsumption(1000, -40)).to.throw('Invalid Information!');
            expect(() => { chooseYourCar.carFuelConsumption('5', '5') }).to.throw('Invalid Information!');
            expect(() => { chooseYourCar.carFuelConsumption('5', 5) }).to.throw('Invalid Information!');
            expect(chooseYourCar.carFuelConsumption(50, 5)).to.equal('The car burns too much fuel - 10.00 liters!'); 
            expect(chooseYourCar.carFuelConsumption(50, 3)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.'); 
            expect(chooseYourCar.carFuelConsumption(50, 10)).to.equal('The car burns too much fuel - 20.00 liters!'); 
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');          
        });
    });
});