function blackFlag(input) {
    let piracyDays = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let targetPlunder = Number(input[2]);
    let total = 0;

    for (let day = 1; day <= piracyDays; day++) {
        total += dailyPlunder;
        if (day % 3 == 0) {
            total += 0.5 * dailyPlunder;
        }
        if (day % 5 == 0) {
            total *= 0.7;
        }
    }
    if (total >= targetPlunder) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(total/targetPlunder * 100).toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);