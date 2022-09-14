function gameOfIntervals(input) {
    let turnsPerGame = Number(input[0]);
    let totalPoints = 0;
    let zeroNine = 0;
    let tenNineteen = 0;
    let twentyTwentynine = 0;
    let thirtyThirtynine = 0;
    let fourtyFifty = 0;
    let invalidNums = 0;

    for (let turn = 1; turn <= turnsPerGame; turn++) {
        let number = Number(input[turn]);
        if (number >= 0) {
            if (number <= 9) {
                totalPoints += (number * 0.2);
                zeroNine++;
            } else if (number <= 19) {
                totalPoints += (number * 0.3);
                tenNineteen++;
            } else if (number <= 29) {
                totalPoints += (number * 0.4);
                twentyTwentynine++;
            } else if (number <= 39) {
                totalPoints += 50;
                thirtyThirtynine++
            } else if (number <= 50) {
                totalPoints += 100;
                fourtyFifty++;
            } else {
                totalPoints /= 2;
                invalidNums++;
            }
        } else {
            totalPoints /= 2;
            invalidNums++;
        }
    }
    console.log(totalPoints.toFixed(2));
    console.log(`From 0 to 9: ${(zeroNine / turnsPerGame * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(tenNineteen / turnsPerGame * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(twentyTwentynine / turnsPerGame * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(thirtyThirtynine / turnsPerGame * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(fourtyFifty / turnsPerGame * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNums / turnsPerGame * 100).toFixed(2)}%`);

}

gameOfIntervals([
    '10',
    '43',
    '57',
    '-12',
    '23',
    '12',
    '0',
    '50',
    '40',
    '30',
    '20'
])