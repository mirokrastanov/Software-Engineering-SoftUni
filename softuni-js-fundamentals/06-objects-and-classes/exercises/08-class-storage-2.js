class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(product) {
        let item = {
            name: product.name,
            price: product.price,
            quantity: product.quantity,
        };
        this.storage.push(item);
        this.capacity -= item.quantity;
        this.totalCost += (item.quantity * item.price);
    }
    getProducts() {
        let output = "";
        let counter = 0;
        this.storage.forEach(item => {
            counter++;
            let asStr = JSON.stringify(item);
            output += `${asStr}`;
            if (counter != 3) {
                output += `\n`;
            }
        });
        return output;
    }

}


// 1st input below

// let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
// let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
// let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
// let storage = new Storage(50);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// storage.addProduct(productThree);
// console.log(storage.getProducts());
// console.log(storage.capacity);
// console.log(storage.totalCost);


// 2nd input below

let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);
