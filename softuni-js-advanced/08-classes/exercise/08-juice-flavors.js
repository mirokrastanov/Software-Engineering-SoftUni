function juiceFlavors(inputArr) {
    let storage = { ordered: [] };
    while (inputArr.length > 0) {
        let [juice, inputQuantity] = inputArr.shift().split(' => ');
        if (!storage[juice]) storage[juice] = { bottles: 0, quantity: 0 };
        storage[juice].quantity += Number(inputQuantity);
        while (storage[juice].quantity >= 1000) {
            if (!storage.ordered.includes(juice)) storage.ordered.push(juice);
            storage[juice].quantity -= 1000;
            storage[juice].bottles += 1;
        }
    }
    storage.ordered.forEach(x => console.log(`${x} => ${storage[x].bottles}`));
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