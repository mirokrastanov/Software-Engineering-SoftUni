function furniture(input) {
    let command = input.shift();
    let pattern = />>(?<name>\w+)<<(?<price>\d+.*d*)!(?<quantity>\d+)/g;
    let totalMoney = 0;
    let bought = [];

    while (command != 'Purchase') {
        let matches = command.matchAll(pattern);
        for (let iterator of matches) {
            bought.push(iterator.groups.name);
            totalMoney += (iterator.groups.price * iterator.groups.quantity);
        }
        command = input.shift();
    }
    console.log('Bought furniture:');
    for (let item of bought) {
        console.log(item);
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);