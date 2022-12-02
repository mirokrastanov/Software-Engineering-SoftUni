function solve() {

    let cars = {};
    let current = "Audi R8";

    cars[current] = {};
    cars[current].model = current;
    cars[current].mileage = 385;
    cars[current].fuel = 65;

    console.log(cars[current]);

}

solve();