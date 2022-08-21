function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);
    let waterResistance = 12.5;
    let rawTime = distanceInMeters * secondsPerMeter;
    let waterLossCount = Math.floor(distanceInMeters / 15);
    let waterLosses = waterLossCount * waterResistance;
    let totalTime = rawTime + waterLosses;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        let notEnough = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${notEnough.toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"])
