function transportPrice(input) {
    let n = Number(input[0]);
    let dayOrNight = input[1];
    let taxiDayPrice = 0.70 + (0.79 * n);
    let taxiNightPrice = 0.70 + (0.90 * n);
    let busPrice = 0.09 * n;
    let trainPrice = 0.06 * n;
    let finalPrice = 0;
    if (dayOrNight === 'day' && n < 20) {
        finalPrice = taxiDayPrice;
        console.log(finalPrice.toFixed(2));
    } else if (dayOrNight === 'day' && n < 100) {
        finalPrice = busPrice;
        console.log(finalPrice.toFixed(2));
    } else if (dayOrNight === 'day' && n >= 100) {
        finalPrice = trainPrice;
        console.log(finalPrice.toFixed(2));
    } else if (dayOrNight === 'night' && n < 20) {
        finalPrice = taxiNightPrice;
        console.log(finalPrice.toFixed(2));
    } else if (dayOrNight === 'night' && n < 100) {
        finalPrice = busPrice;
        console.log(finalPrice.toFixed(2));
    } else if (dayOrNight === 'night' && n >= 100) {
        finalPrice = trainPrice;
        console.log(finalPrice.toFixed(2));
    }
}

transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);
