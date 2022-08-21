function worldSwimmingRecord(input) {
    let timeInSecForRecord = Number(input[0]);
    let distanceToSwim = Number(input[1]);
    let secondsPerMeter = Number(input[2]);
    let waterResistance = (Math.floor(distanceToSwim / 15)) * 12.5;

    let timeInSecActual = (distanceToSwim * secondsPerMeter) + waterResistance;
    let timeDiff = Math.abs(timeInSecForRecord - timeInSecActual);

    if (timeInSecActual < timeInSecForRecord) {
        // success
        console.log(`Yes, he succeeded! The new world record is ${timeInSecActual.toFixed(2)} seconds.`);
    } else {
        //failure
        console.log(`No, he failed! He was ${timeDiff.toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
