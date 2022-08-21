function divisionWithoutRemainder(input) {
    let numberQuantity = Number(input[0]);
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;

    
    for (let i = 1; i <= numberQuantity; i++) {
        let currentNum = Number(input[i]);
        if (currentNum % 2 === 0) {
            p2++;
        }
        if (currentNum % 3 === 0) {
            p3++;
        }
        if (currentNum % 4 === 0) {
            p4++;
        }
    }
    console.log(`${(p2/numberQuantity * 100).toFixed(2)}%`);
    console.log(`${(p3/numberQuantity * 100).toFixed(2)}%`);
    console.log(`${(p4/numberQuantity * 100).toFixed(2)}%`);



}

divisionWithoutRemainder([
    '10',
    '680',
    '2',
    '600',
    '200',
    '800',
    '799',
    '199',
    '46',
    '128',
    '65'
])
divisionWithoutRemainder([
    '3',
    '3',
    '6',
    '9'
])