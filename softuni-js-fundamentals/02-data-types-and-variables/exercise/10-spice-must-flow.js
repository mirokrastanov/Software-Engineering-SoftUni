function spiceMustFlow(initialYield) {
    let spiceTotal = 0;
    let firstDayYield = Number(initialYield);
    let daysInOperation = 0;

    for (let dailyYield = firstDayYield; dailyYield >= 100; dailyYield -= 10) {
        daysInOperation++;
        spiceTotal += dailyYield - 26;
        if (spiceTotal < 0) {
            spiceTotal = 0;
        }
    }
    spiceTotal -= 26;
    if (spiceTotal < 0) {
        spiceTotal = 0;
    }
    console.log(daysInOperation);
    console.log(spiceTotal);

}

spiceMustFlow(450);