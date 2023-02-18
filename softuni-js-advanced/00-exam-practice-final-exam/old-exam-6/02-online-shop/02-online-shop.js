class OnlineShop {
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) throw new Error('Not enough space in the warehouse.');
        this.products.push({ 'product': product, 'quantity': quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }
    quantityCheck (product, minimalQuantity) {
        let productIndex = this.findProductIndex(product);
        if (productIndex == -1) throw new Error(`There is no ${product} in the warehouse.`);
        let initialQuantity = this.products[productIndex]['quantity'];
        if (minimalQuantity <= 0) throw new Error('The quantity cannot be zero or negative.');
        if (minimalQuantity <= initialQuantity) return `You have enough from product ${product}.`;
        this.products[productIndex].quantity = minimalQuantity;
        return `You added ${initialQuantity} more from the ${product} products.`;
    }
    sellProduct(product) {
        let productIndex = this.findProductIndex(product);
        if (productIndex == -1) throw new Error(`There is no ${product} in the warehouse.`);
        this.products[productIndex]['quantity']--;
        this.sales.push({ 'product': product, 'quantity': 1});
        return `The ${product} has been successfully sold.`;
    }
    revision() {
        let output = '';
        if (this.sales.length == 0) throw new Error('There are no sales today!');
        output += `You sold ${this.sales.length} products today!\nProducts in the warehouse:`;
        this.products.forEach(x => output += `\n${x['product']}-${x['quantity']} more left`);
        return output;
    }
    findProductIndex(product) {
        let productIndex = -1;
        this.products.slice().filter((a, i) => { a.product == product ? productIndex = i : false });
        return productIndex;
    }
}

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));
// // The headphones has been successfully delivered in the warehouse. 
// // The laptop has been successfully delivered in the warehouse.
// // Uncaught Error Error: Not enough space in the warehouse.


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));
// // The headphones has been successfully delivered in the warehouse. 
// // The laptop has been successfully delivered in the warehouse. 
// // You have enough from product headphones. 
// // You added 5 more from the laptop products.
// // Uncaught Error Error: There is no TV in the warehouse.


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));
// // The headphones has been successfully delivered in the warehouse. 
// // The laptop has been successfully delivered in the warehouse. 
// // You have enough from product headphones. 
// // You added 5 more from the laptop products. 
// // The headphones has been successfully sold. 
// // The laptop has been successfully sold.
// // Uncaught Error Error: There is no keyboard in the warehouse.

 
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
// The headphones has been successfully delivered in the warehouse. 
// The laptop has been successfully delivered in the warehouse. 
// You have enough from product headphones. 
// You added 5 more from the laptop products. 
// The headphones has been successfully sold. 
// The laptop has been successfully sold. 
// You sold 2 products today!
// Products in the warehouse: 
// headphones-9 more left 
// laptop-9 more left