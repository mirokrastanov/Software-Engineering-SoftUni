function catalog(input) {
    let catalogue = {};

    input.forEach(item => {
        let [product, price] = item.split(" : ");
        catalogue[product] = Number(price);
    });

    let sorted = Object.fromEntries(Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0])));

    let current = "";
    for (let key in sorted) {
        let letter = key[0];
        if (letter != current) {
            console.log(letter);
            current = letter;
        }
        console.log(`  ${key}: ${sorted[key]}`);
    }

}

catalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
catalog([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);