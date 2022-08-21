function toyShop(input) {
    let puzzlePrice = 2.6;
    let dollPrice = 3;
    let teddyBearPrice = 4.1;
    let minionPrice = 8.2;
    let toyTruckPrice = 2;
    let tripCost = Number(input[0]);
    let puzzleAmount = Number(input[1]);
    let dollAmount = Number(input[2]);
    let teddyBearAmount = Number(input[3]);
    let minionAmount = Number(input[4]);
    let toyTruckAmount = Number(input[5]);
    let toysAmount = puzzleAmount + dollAmount + teddyBearAmount + minionAmount + toyTruckAmount;
    let puzzleTotal = puzzleAmount * puzzlePrice;
    let dollTotal = dollAmount * dollPrice;
    let teddyBearTotal = teddyBearAmount * teddyBearPrice;
    let minionTotal = minionAmount * minionPrice;
    let toyTruckTotal = toyTruckAmount * toyTruckPrice;
    let earnings = puzzleTotal + dollTotal + teddyBearTotal + minionTotal + toyTruckTotal;
    let finalPrice = 0;
    if (toysAmount >= 50 && toysAmount > 0) {
        finalPrice = 0.75 * earnings;
    } else {
        finalPrice = earnings;
    }
    let finalEarnings = 0.9 * finalPrice;
    if (finalEarnings > tripCost) {
        let moneyLeft = finalEarnings - tripCost;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else if (finalEarnings < tripCost) {
        let notEnough = tripCost - finalEarnings;
        console.log(`Not enough money! ${notEnough.toFixed(2)} lv needed.`);
    } else {
        console.log(`Yes! 0.00 lv left.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
