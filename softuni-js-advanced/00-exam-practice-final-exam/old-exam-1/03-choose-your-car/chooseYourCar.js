const chooseYourCar = {
    choosingType(type, color, year) {
        if (year < 1900 || year > 2022) {
            throw new Error(`Invalid Year!`);
        } else {
            if (type == "Sedan") {

                if (year >= 2010) {
                    return `This ${color} ${type} meets the requirements, that you have.`;
                } else {
                    return `This ${type} is too old for you, especially with that ${color} color.`;
                }
            }
            throw new Error(`This type of car is not what you are looking for.`);
        }
    },

    brandName(brands, brandIndex) {

        let result = [];

        if (!Array.isArray(brands) || !Number.isInteger(brandIndex) || brandIndex < 0 || brandIndex >= brands.length) {
            throw new Error("Invalid Information!");
        }
        for (let i = 0; i < brands.length; i++) {
            if (i !== brandIndex) {
                result.push(brands[i]);
            }
        }
        return result.join(", ");
    },

    carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {

        let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);

        if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
            typeof consumptedFuelInLiters !== "number" || consumptedFuelInLiters <= 0) {
            throw new Error("Invalid Information!");
        } else if (litersPerHundredKm <= 7) {
            return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
        } else {
            return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
        }
    }
}
module.exports = chooseYourCar;

let test1 = chooseYourCar.choosingType('Sedan', 'blue', "2002");
console.log(test1);
// let test2 = chooseYourCar.choosingType('Sedan', 'blue', 2022);
// console.log(test2);
// let test3 = chooseYourCar.choosingType('Pick-up', 'orange', 1922);
// console.log(test3);

let test4 = chooseYourCar.brandName(['bmw', 'chevy', 'dodge', 'kia'], 2);
console.log(test4);
let test5 = chooseYourCar.carFuelConsumption(1000, 70);
console.log(test5);


// let test7 = chooseYourCar.choosingType('Sedan', 'blue', []);
// console.log(test7);