function catalogue(input) {
    let products = {};

    input.forEach(element => {
        let [name, price] = element.split(" : ");
        products[name] = Number(price);
    });

    Object.keys(products).sort((a, b) => a.localeCompare(b)).forEach(function (key) {
        let value = products[key];
        delete products[key];
        products[key] = value;
    });

    let previousLetter = "";
    let counter = 0;
    for (let key in products) {
        let currentLetter = key[0];
        if (currentLetter != previousLetter) {
            previousLetter = currentLetter;
            console.log(previousLetter);
        }
        console.log(`  ${key}: ${products[key]}`);
        counter++;
    }

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);
