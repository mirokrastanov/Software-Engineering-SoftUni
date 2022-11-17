function storeProvision(stock, orders) {
    let storage = {};

    for (let i = 0; i < stock.length; i += 2) {
        let item = stock[i];
        let quantity = Number(stock[i + 1]);
        storage[item] = quantity;
    }

    for (let i = 0; i < orders.length; i += 2) {
        let item = orders[i];
        let quantity = Number(orders[i + 1]);
        let includes = Object.keys(storage).includes(item);
        if (includes) {
            storage[item] += quantity;
        } else {
            storage[item] = quantity;
        }
    }

    for (let [key, value] of Object.entries(storage)) {
        console.log(`${key} -> ${value}`);
    }

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]);