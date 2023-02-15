function juiceFlavors(input) {

    let storage = {}

    for (let el of input) {
        let [juice, quantity] = el.split(' => ')
        quantity = Number(quantity);
        if (!storage[juice]) {
            storage[juice] = { bottles: 0, quantity: 0 }
        }
        storage[juice].quantity += quantity;
        if (storage[juice].quantity >= 1000) {
            while (storage[juice].quantity >= 1000) {
                storage[juice].bottles += 1;
                storage[juice].quantity -= 1000;
                if (storage[juice].bottles === 1) {
                    let currentQuantity = storage[juice].quantity
                    delete storage[juice];
                    storage[juice] = { bottles: 1, quantity: currentQuantity }
                }
            }
        }

    }
    for (const juice in storage) {
        if (storage[juice].bottles > 0) {
            console.log(`${juice} => ${storage[juice].bottles}`);
        }
    }
}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);