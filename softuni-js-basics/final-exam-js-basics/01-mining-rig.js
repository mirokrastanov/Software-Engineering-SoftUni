function miningRig(input) {
    let gpuPrice = Number(input[0]);
    let adapterPrice = Number(input[1]);
    let dailyPowerPerCard = Number(input[2]);
    let dailyProfitPerCard = Number(input[3]);

    let gpuTotal = 13 * gpuPrice;
    let adapterTotal = 13 * adapterPrice;
    let costsTotal = gpuTotal + adapterTotal + 1000;
    // math.ceil

    let dailyTotal = dailyProfitPerCard - dailyPowerPerCard;

    let daysToGetEven = Math.ceil(costsTotal / (dailyTotal * 13));
    
    console.log(costsTotal);
    console.log(daysToGetEven);

}

miningRig(["700",
"15",
"0.20",
"2"]);
// miningRig(["800",
// "10",
// "0.32",
// "6.4"]);