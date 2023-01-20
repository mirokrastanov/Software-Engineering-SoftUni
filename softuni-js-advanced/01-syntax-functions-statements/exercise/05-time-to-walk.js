function timeToWalk(steps, stepL, speed) {
    let distance = steps * stepL;
    let time = distance / (speed / 3.6);
    time += Math.floor(distance / 500) * 60;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    if (hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes <= 9) {
        minutes = "0" + Math.floor(minutes);
    } else {
        minutes = Math.floor(minutes);
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);

}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);