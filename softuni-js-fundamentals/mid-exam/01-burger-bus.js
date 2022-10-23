function burgurBus(inputArr) {
    let workingArr = inputArr.slice();
    let cities = Number(workingArr.shift());
    let commands = workingArr.splice(0);
    let cityCounter = 0;
    let profit = 0;
    let total = 0;

    while (commands.length > 0) {
        profit = 0;
        let city = commands.shift();
        let earned = Number(commands.shift());
        let spent = Number(commands.shift());
        cityCounter++;
        if (cityCounter % 5 == 0) {
            earned *= 0.9;
        } else if (cityCounter % 3 == 0) {
            spent *= 1.5;
        }
        profit = earned - spent;
        total += profit;
        console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);

    }
    console.log(`Burger Bus total profit: ${total.toFixed(2)} leva.`);

}

burgurBus([
    "3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"
]);
// burgurBus([
//     "5",
//     "Lille",
//     "2226.00",
//     "1200.60",
//     "Rennes",
//     "6320.60",
//     "5460.20",
//     "Reims",
//     "600.20",
//     "452.32",
//     "Bordeaux",
//     "6925.30",
//     "2650.40",
//     "Montpellier",
//     "680.50",
//     "290.20"
// ]);