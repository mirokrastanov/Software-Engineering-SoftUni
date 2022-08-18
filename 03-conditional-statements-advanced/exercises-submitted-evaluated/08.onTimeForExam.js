function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);
    let examInMin = examHour * 60 + examMin;
    let arrivalInMin = arrivalHour * 60 + arrivalMin;
    let diffInMin = examInMin - arrivalInMin;
    let diffHour = 0;
    let diffMin = 0;

    if (diffInMin < 0) {
        // late
        console.log("Late");
    } else if (diffInMin >= 0 && diffInMin <= 30) {
        // on time
        console.log("On time");
    } else if (diffInMin > 30) {
        // early
        console.log("Early");
    }

    if (Math.abs(diffInMin) >= 1) {
        
        if (diffInMin < 60 && diffInMin > 0) {
            //early, less than 1h
            console.log(`${diffInMin} minutes before the start`);
        } else if (diffInMin >= 60) {
            //early, more than 1h
            diffHour = Math.floor(diffInMin / 60);
            diffMin = diffInMin % 60;
            if (diffMin >= 10) {
                console.log(`${diffHour}:${diffMin} hours before the start`);
            } else {
                console.log(`${diffHour}:0${diffMin} hours before the start`);
            }
        } else if (diffInMin > -60) {
            //late, less than 1h
            diffInMin = Math.abs(diffInMin);
            console.log(`${diffInMin} minutes after the start`);
        } else if (diffInMin <= -60) {
            //late, more than 1h
            diffInMin = Math.abs(diffInMin);
            diffHour = Math.floor(diffInMin / 60);
            diffMin = diffInMin % 60;
            if (diffMin >= 10) {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            } else {
                console.log(`${diffHour}:0${diffMin} hours after the start`);
            }
        }

    }

}

onTimeForExam(["9", "30", "9", "50"]);
onTimeForExam(["9", "00", "8", "30"]);
onTimeForExam(["16", "00", "15", "00"]);
onTimeForExam(["9", "00", "10", "30"]);
onTimeForExam(["14", "00", "13", "55"]);
onTimeForExam(["11", "30", "8", "12"]);
onTimeForExam(["10", "00", "10", "00"]);
onTimeForExam(["11", "30", "10", "55"]);
onTimeForExam(["11", "30", "12", "29"]);
