function poolDay(input) {
    let peopleCount = Number(input[0]);
    let entFee = Number(input[1]);
    let sunloungerPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);
    let entFeeTotal = entFee * peopleCount;
    let umbrellaCount = Math.ceil(peopleCount / 2);
    let umbrellaTotal = umbrellaCount * umbrellaPrice;
    let sunloungerCount = Math.ceil(0.75 * peopleCount);
    let sunloungerTotal = sunloungerCount * sunloungerPrice;
    let totalPrice = entFeeTotal + umbrellaTotal + sunloungerTotal;
    console.log(`${totalPrice.toFixed(2)} lv.`);

}

poolDay(["21", "5.50", "4.40", "6.20"]);
poolDay(["50", "6", "8", "4"]);
