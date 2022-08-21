function cleverLily(input) {
    let age = Number(input[0]);
    let washer = Number(input[1]);
    let toyPricePer = Number(input[2]);
    let money = 0;
    let toys = 0;
    let brotherCut = 0;
    let toyTotal = 0;
    let moneyTotal = 0;

    for (let i = 1; i <= 77; i++) {
        if (i % 2 === 0) {
            money += ((i / 2) * 10);
            brotherCut += 1;
        } else {
            toys += 1;
        }
        if (i === age) {
            break;
        }
    }
    
    toyTotal = toys * toyPricePer;
    moneyTotal = money - brotherCut + toyTotal;
    console.log();
    if (moneyTotal >= washer) {
        console.log(`Yes! ${(moneyTotal - washer).toFixed(2)}`);
    } else {
        console.log(`No! ${(washer - moneyTotal).toFixed(2)}`);
    }

}

cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);
