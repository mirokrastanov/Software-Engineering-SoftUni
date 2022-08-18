function mountainRun(input) {
    let currentRecord = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPer1Meter = Number(input[2]);
    let attemptTime = distanceInMeters * secondsPer1Meter;
    let inclineLosses = 30 * Math.floor(distanceInMeters / 50);
    let totalTime = attemptTime + inclineLosses;
    let timeDiff = Math.abs(totalTime - currentRecord);

    if (totalTime < currentRecord) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${timeDiff.toFixed(2)} seconds slower.`);
    }

}

mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]);
mountainRun(["1377", "389", "3"]);