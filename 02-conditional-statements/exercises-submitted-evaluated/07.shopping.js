function shopping(input) {
    let budget = Number(input[0]);
    let n = Number(input[1]);
    let m = Number(input[2]);
    let p = Number(input[3]);
    let nCost = 250;
    let nTotal = nCost * n;
    let mCost = 0.35 * nTotal;
    let mTotal = mCost * m;
    let pCost = 0.1 *nTotal;
    let pTotal = pCost * p;
    let totalCost = nTotal + mTotal + pTotal;
    if (n > m) {
        totalCost = totalCost * 0.85;
    } else {
        totalCost = totalCost;
    }
    if (budget >= totalCost) {
        let leftoverMoney = budget - totalCost;
        console.log(`You have ${leftoverMoney.toFixed(2)} leva left!`);
    } else {
        let notEnough = totalCost - budget;
        console.log(`Not enough money! You need ${notEnough.toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
