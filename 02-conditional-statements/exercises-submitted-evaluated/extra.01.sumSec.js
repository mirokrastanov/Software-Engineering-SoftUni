function sumSec(input) {
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);
    let total = time1 + time2 + time3;
    let min = Math.floor(total / 60);
    let sec = total % 60;
    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }

}

sumSec(["35", "45", "44"]);
sumSec(["22", "7", "34"]);
sumSec(["50", "50", "49"]);
sumSec(["14", "12", "10"]);
