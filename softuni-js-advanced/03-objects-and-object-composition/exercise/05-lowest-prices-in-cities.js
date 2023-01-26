function lowestPrices(input) {
    let products = {};

    input.forEach(line => {
        let [city, product, price] = line.split(" | ");
        price = Number(price);
        if (!products[product]) {
            products[product] = [city, price];
        } else {
            let currentPrice = products[product][1];
            if (price < currentPrice) {
                products[product][0] = city;
                products[product][1] = price;
            }
        }
    });
    // console.log(products);

    for (const [product, data] of Object.entries(products)) {
        console.log(`${product} -> ${data[1]} (${data[0]})`);
    }

}
lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);