function addBags(input) {
    let luggagePrice20Plus = Number(input[0]);
    let luggageKG = Number(input[1]);
    let daysUntilTrip = Number(input[2]);
    let luggageQuantity = Number(input[3]);
    let totalPrice = 0;

    if (luggageKG < 10) {
        totalPrice = (0.2 * luggagePrice20Plus);
    } else if (luggageKG <= 20) {
        totalPrice = (0.5 * luggagePrice20Plus);
    } else if (luggageKG > 20) {
        totalPrice = luggagePrice20Plus;
    }
    if (daysUntilTrip > 30) {
        totalPrice *= 1.1;
    } else if ( daysUntilTrip <= 30 && daysUntilTrip >= 7) {
        totalPrice *= 1.15;
    } else if (daysUntilTrip < 7) {
        totalPrice *= 1.4;
    }
    totalPrice *= luggageQuantity;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);

}

addBags(["30",
"18",
"15",
"2"]);
addBags(["25.50",
"5",
"36",
"6"]);
addBags(["63.80",
"23",
"3",
"1"]);


