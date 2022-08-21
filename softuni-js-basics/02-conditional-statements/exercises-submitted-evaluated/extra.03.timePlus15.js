function timePlus15(input) {
    let inputHour = Number(input[0]);
    let inputMin = Number(input[1]);
    let inputHourInMin = inputHour * 60;
    let inputTotalMin = inputHourInMin + inputMin;
    let outputTotalMin = 0;
    let outputHour = 0;
    let outputMin = 0;

    if (inputHour <= 23 && inputHour >= 0 && inputMin >= 0 && inputMin <= 59) {
        outputTotalMin = inputTotalMin + 15;
        outputHour = Math.floor(outputTotalMin / 60);
        outputMin = outputTotalMin % 60;
        if (outputHour === 24) {
            outputHour = 0;
        }
        if (outputMin < 10) {
            console.log(`${outputHour}:0${outputMin}`);
        } else {
            console.log(`${outputHour}:${outputMin}`);
        }
    }

}

timePlus15(["1", "46"]);
timePlus15(["0", "01"]);
timePlus15(["23", "59"]);
timePlus15(["11", "08"]);
timePlus15(["12", "49"]);