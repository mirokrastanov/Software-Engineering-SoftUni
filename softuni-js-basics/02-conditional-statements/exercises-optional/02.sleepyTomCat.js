function sleepyTomCat(input) {
    let daysOff = Number(input[0]);
    let playNorm = 30000;
    let playTimeOnWorkDays = 63;
    let playTimeOnkDaysOff = 127;
    let daysInAYear = 365;
    let workDays = daysInAYear - daysOff;
    let workDaysTotalPlay = workDays * playTimeOnWorkDays;
    let daysOffTotalPlay = daysOff * playTimeOnkDaysOff;
    let playTimeTotal = daysOffTotalPlay + workDaysTotalPlay;
    let playTimeDiff = Math.abs(playNorm - playTimeTotal);
    if (playTimeTotal > playNorm) {
        let extraTime = playTimeDiff;
        let extraHours = Math.floor(extraTime / 60);
        let extraMin = extraTime % 60;
        console.log(`Tom will run away`);
        console.log(`${extraHours} hours and ${extraMin} minutes more for play`);
    } else {
        let lessTime = playTimeDiff;
        let lessHours = Math.floor(lessTime / 60);
        let lessMin = lessTime % 60;
        console.log(`Tom sleeps well`);
        console.log(`${lessHours} hours and ${lessMin} minutes less for play`); 
    }
}

sleepyTomCat(["20"]);
sleepyTomCat(["113"]);
