function autoEngCompany(input) {
    let cars = {};
    while (input.length > 0) {
        let [brand, model, quantity] = input.shift().split(' | ');
        if (!cars[brand]) cars[brand] = {};
        if (!cars[brand][model]) cars[brand][model] = Number(quantity);
        else cars[brand][model] += Number(quantity);
    }
    Object.entries(cars).forEach(brand => {
        console.log(brand[0]);
        Object.entries(brand[1]).forEach(model => console.log(`###${model[0]} -> ${model[1]}`));
    });
}

autoEngCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);