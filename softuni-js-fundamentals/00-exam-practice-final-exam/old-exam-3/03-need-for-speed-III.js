function needForSpeedIII(input) {
    let carQuantity = Number(input.shift());
    let cars = [];

    for (let i = 0; i < carQuantity; i++) {
        let current = input.shift();
        let [model, mileage, fuel] = current.split("|");
        cars[model] = {};
        cars[model].model = model;
        cars[model].mileage = Number(mileage);
        cars[model].fuel = Number(fuel);
    }
    
    let commands = input.splice(0);
    while (commands.length > 0) {
        let currentLine = commands.shift();
        if (currentLine == 'Stop') {
            // let sorted = cars.sort((a, b) => b.mileage - a.mileage || a.localeCompare(b));
            for (let car of Object.entries(cars)) {
                console.log(`${car[1].model} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
            }
            break;
        }
        let [command, car, v1, v2] = currentLine.split(" : ");
        if (!cars[car]) {
            continue;
        }
        switch (command) {
            case "Drive":
                let distance = Number(v1);
                let fuelNeeded = Number(v2);
                if (cars[car].fuel >= fuelNeeded) {
                    cars[car].fuel -= fuelNeeded;
                    cars[car].mileage += distance;
                    console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                } else {
                    console.log("Not enough fuel to make that ride");
                }
                if (cars[car].mileage >= 100000) {
                    delete cars[car]; 
                    // cars = cars.filter(a => a.model != car); 
                    // cars.splice(cars.indexOf(car), 1);
                    console.log(`Time to sell the ${car}!`);
                }
                break;
            case "Refuel":
                let fuelFilled = Number(v1);
                let initialFuel = cars[car].fuel;
                if (initialFuel + fuelFilled > 75) {
                    cars[car].fuel = 75;
                    console.log(`${car} refueled with ${75 - initialFuel} liters`);
                } else {
                    cars[car].fuel += fuelFilled;
                    console.log(`${car} refueled with ${fuelFilled} liters`);
                }
                break;
            case "Revert":
                let initialMileage = cars[car].mileage;
                let decreaseWith = Number(v1);
                if (initialMileage - decreaseWith < 10000) {
                    cars[car].mileage = 10000;
                } else {
                    cars[car].mileage -= decreaseWith;
                    console.log(`${car} mileage decreased by ${decreaseWith} kilometers`);
                }
                break;
        }
    }
}

// needForSpeedIII([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);