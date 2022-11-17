function storeProvision(arr1, arr2) {
    let stock = arr1.slice();
    let ordered = arr2.slice();

    while (ordered.length > 0) {
        let currentProduct = ordered.shift();
        let currentQuantity = Number(ordered.shift());
        let currentIndex = stock.indexOf(currentProduct);
        let inStock = currentIndex != -1;
        if (inStock) {
            let currentValue = Number(stock[currentIndex + 1]);
            let outputValue = currentValue + currentQuantity;
            stock.splice(currentIndex + 1, 1, outputValue);
        } else {
            stock.push(currentProduct);
            stock.push(currentQuantity);
        }
    }

    class Item {
        constructor(product, quantity) {
            this.product = product;
            this.quantity = quantity;
        }
    };

    for (let i = 0; i < stock.length; i += 2) {
        let product = new Item (stock[i], stock[i + 1]);
        console.log(`${product.product} -> ${product.quantity}`);
    }

}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
storeProvision(
    ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
);