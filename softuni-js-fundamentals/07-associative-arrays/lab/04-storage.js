function storage(input) {
    let inStore = new Map();

    input.forEach(element => {
        let [item, quantity] = element.split(" ");

        if (inStore.has(item)) {
            let value = inStore.get(item) + Number(quantity);
            inStore.set(item, value);
        } else {
            inStore.set(item, Number(quantity));
        }
    });

    inStore.forEach((value, key) => {
        console.log(`${key} -> ${value}`);
    });

}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);