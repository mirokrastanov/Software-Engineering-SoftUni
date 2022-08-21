function timePlus15(input) {
    let hourIn = Number(input[0]);
    let minIn = Number(input[1]);
    let hourOut = 0;
    let minOut = minIn + 15;

    if (minOut < 60) {
        hourOut = hourIn;
    } else {
        hourOut = hourIn + 1;
        minOut = minOut % 60;
    }
    if (hourOut % 24 == 0) {
        hourOut = 0;
    } else if (hourOut < 24) {
        hourOut = hourOut;
    }
    if (minOut < 10) {
        console.log(`${hourOut}:0${minOut}`);
    } else {
        console.log(`${hourOut}:${minOut}`);
    }
}

timePlus15(["1", "46"]);
timePlus15(["0", "01"]);
timePlus15(["23", "59"]);
timePlus15(["11", "08"]);
timePlus15(["12", "49"]);
