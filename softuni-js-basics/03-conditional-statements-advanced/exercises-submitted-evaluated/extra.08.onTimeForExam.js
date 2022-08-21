function onTimeForExam2(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);
    let examTotalMin = (examHour * 60) + examMin;
    let arrivalTotalMin = (arrivalHour * 60) + arrivalMin;
    let totalMinDiff = examTotalMin - arrivalTotalMin;
    let diffHour = 0;
    let diffMin = 0;

    if (totalMinDiff < 0) {
        //late
        console.log(`Late`);
    } else if (totalMinDiff <= 30 && totalMinDiff >= 0) {
        //on time 
        console.log(`On time`);
    } else if (totalMinDiff > 30) {
        //early
        console.log(`Early`);
    }
    if (totalMinDiff >= 1 || totalMinDiff <= -1) {
        diffHour = Math.floor(Math.abs(totalMinDiff) / 60);
        diffMin = Math.abs(totalMinDiff) % 60;
        if (totalMinDiff > 0 && totalMinDiff < 60) {
            //early, less than 1h
            console.log(`${Math.abs(totalMinDiff)} minutes before the start`);
        } else if (totalMinDiff >= 60) {
            //early, more than 1h
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours before the start`);
            } else {
                console.log(`${diffHour}:${diffMin} hours before the start`);
            }
        } else if (totalMinDiff > -60 && totalMinDiff < 0) {
            //late, less than 1h
            console.log(`${Math.abs(totalMinDiff)} minutes after the start`);
        } else if (totalMinDiff <= -60) {
            //late, more than 1h
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours after the start`);
            } else {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            }
        }
    }
}

onTimeForExam2(["9", "30", "9", "50"]);
onTimeForExam2(["9", "00", "8", "30"]);
onTimeForExam2(["16", "00", "15", "00"]);
onTimeForExam2(["9", "00", "10", "30"]);
onTimeForExam2(["14", "00", "13", "55"]);
onTimeForExam2(["11", "30", "8", "12"]);
onTimeForExam2(["10", "00", "10", "00"]);
onTimeForExam2(["11", "30", "10", "55"]);
onTimeForExam2(["11", "30", "12", "29"]);
