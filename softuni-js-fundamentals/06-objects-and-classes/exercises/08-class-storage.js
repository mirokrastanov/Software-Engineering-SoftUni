class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    };

    addProduct(obj) {
        this.storage.push(obj);
        this.capacity -= obj.quantity;
        this.totalCost += (obj.price * obj.quantity);
    };

    getProducts() {
        let output = "";
        for (let i = 0; i < this.storage.length; i++) {
            output += JSON.stringify(this.storage[i]);
            if (!(i == this.storage.length - 1)) {
                output += "\n";
            }
        }
        return output;
    }

};


let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);



// let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
// let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
// let storage = new Storage(30);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// console.log(storage.totalCost);
