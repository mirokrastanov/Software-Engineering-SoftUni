function storeCatalog(input) {
    let unsorted = {};

    input.forEach(element => {
        let [item, price] = element.split(" : ");
        unsorted[item] = Number(price);
    });

    let sorted = Object.entries(unsorted).sort((a, b) => a[0].localeCompare(b[0]));

    let letter;
    for (const [item, price] of sorted) {
        if (!letter || item[0] != letter) {
            letter = item[0];
            console.log(letter);
        }
        console.log(`  ${item}: ${price}`);
    }
}

storeCatalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
storeCatalog([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);