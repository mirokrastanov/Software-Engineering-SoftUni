function bills(input) {
    let months = Number(input[0]);
    let electricityTotal = 0;
    let waterTotal = 0;
    let internetTotal = 0;
    let miscellaneousTotal = 0;

    for (let month = 1; month <= months; month++) {
        let electricity = Number(input[month]);
        let water = 20;
        let internet = 15;
        let miscellaneous = (electricity + water + internet) * 1.2;
        electricityTotal += electricity;
        waterTotal += water;
        internetTotal += internet;
        miscellaneousTotal += miscellaneous;
    }
    let avgCostsPerMonth = (electricityTotal + waterTotal + internetTotal + miscellaneousTotal) / months;
    console.log(`Electricity: ${electricityTotal.toFixed(2)} lv`);
    console.log(`Water: ${waterTotal.toFixed(2)} lv`);
    console.log(`Internet: ${internetTotal.toFixed(2)} lv`);
    console.log(`Other: ${miscellaneousTotal.toFixed(2)} lv`);
    console.log(`Average: ${avgCostsPerMonth.toFixed(2)} lv`);

}

bills([
    '5',
    '68.63',
    '89.25',
    '132.53',
    '93.53',
    '63.22'
]);