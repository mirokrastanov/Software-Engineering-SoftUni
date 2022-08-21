function goldMine(input) {
    let index = 0;
    let locations = Number(input[index]);
    index++;

    for (let i = 1; i <= locations; i++) {
        let dailyTotal = 0;
        let dailyTargetAvg = Number(input[index]);
        index++;
        let daysPerLoc = Number(input[index]);
        index++;
        for (let j = 1; j <= daysPerLoc; j++) {
            let dailyGoldActual = Number(input[index]);
            index++;
            dailyTotal += dailyGoldActual;
        }
        let dailyAvgActual = dailyTotal / daysPerLoc;
        if (dailyAvgActual >= dailyTargetAvg) {
            console.log(`Good job! Average gold per day: ${dailyAvgActual.toFixed(2)}.`);
        } else {
            console.log(`You need ${(dailyTargetAvg - dailyAvgActual).toFixed(2)} gold.`);
        }
    }

}

goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);
// goldMine(["1",
//     "5",
//     "3",
//     "10",
//     "1",
//     "3"]);