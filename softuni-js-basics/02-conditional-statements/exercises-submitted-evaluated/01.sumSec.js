function sumSeconds(input) {
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let sumTotal = time1 + time2 + time3;
    let sumMin = Math.floor(sumTotal / 60);
    let sumSec = sumTotal % 60;

    if (sumSec < 10) {
        console.log(`${sumMin}:0${sumSec}`);
    } else {
        console.log(`${sumMin}:${sumSec}`);
    }
}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);
