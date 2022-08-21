function workout(input) {
    let goal = 1000;
    let days = Number(input[0]);
    let dailyKM = Number(input[1]);
    let totalKMran = dailyKM;

    for (let i = 2; i <= (days + 1); i++) {
        let dailyIncreasePercent = Number(input[i]) / 100;
        dailyKM += (dailyKM * dailyIncreasePercent);
        totalKMran += dailyKM;
    }

    if (totalKMran >= goal) {
        console.log(`You've done a great job running ${Math.ceil(totalKMran - goal)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(goal - totalKMran)} more kilometers`);
    }

}


workout(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"]);
workout(["4",
    "100",
    "30",
    "50",
    "60",
    "80"]);