function solve(input) {
    let workoutDays = Number(input.shift());
    let kmFirstDay = Number(input.shift());
    let target = 1000;
    target -= kmFirstDay;

    for (let i = 0; i < workoutDays; i++) {
        let newPercent = Number(input[i]);
        let newDayKM = ((newPercent / 100) * kmFirstDay) + kmFirstDay;
        newDayKM = Number(newDayKM.toFixed(5));
        kmFirstDay = newDayKM;
        target -= newDayKM;
        target = Number(target.toFixed(5));
        // console.log(target, newDayKM);
    }
    target = Math.ceil(target);
    
    if (target < 0) {
        console.log(`You've done a great job running ${Math.abs(target)} more klilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${target} more kilometers!`);
    }




}

solve(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"]);
solve(["4",
"100",
"30",
"50",
"60",
"80"]);