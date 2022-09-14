function logistics(input) {
    let index = 0;
    let loadQuantity = Number(input[index]);
    index++;
    let pricePerTon = 0;
    let sumLoads = 0;
    let busTotalLoad = 0;
    let truckTotalLoad = 0;
    let trainTotalLoad = 0;

    for (let load = 1; load <= loadQuantity; load++) {
        let currentLoad = Number(input[index]);
        index++;
        sumLoads += currentLoad;
        if (currentLoad < 4) {
            pricePerTon = 200;
            busTotalLoad += currentLoad;
        } else if (currentLoad < 12) {
            pricePerTon = 175;
            truckTotalLoad += currentLoad;
        } else {
            pricePerTon = 120;
            trainTotalLoad += currentLoad;
        }
    }
    let sumPrices = ((busTotalLoad * 200) + (truckTotalLoad * 175) + (trainTotalLoad * 120));
    let avgPrice = sumPrices / sumLoads;
    let busPercent = busTotalLoad / sumLoads * 100;
    let truckPercent = truckTotalLoad / sumLoads * 100;
    let trainPercent = trainTotalLoad / sumLoads * 100;
    console.log(avgPrice.toFixed(2));
    console.log(`${busPercent.toFixed(2)}%`);
    console.log(`${truckPercent.toFixed(2)}%`);
    console.log(`${trainPercent.toFixed(2)}%`);

}

logistics(['4',
    '1',
    '5',
    '16',
    '3'
])