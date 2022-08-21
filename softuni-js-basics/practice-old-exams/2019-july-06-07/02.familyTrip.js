function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePer = Number(input[2]);
    if (nights > 7) {
        pricePer = 0.95 * pricePer;
    }
    let nightsCost = nights * pricePer;
    let extraExpPercent = Number(input[3]);
    let extraExpValue = (extraExpPercent / 100) * budget;
    budget = budget - extraExpValue;
    let totalCost = nightsCost;
    let budgetDiff = Math.abs(budget - totalCost);
    if (budget >= totalCost) {
        console.log(`Ivanovi will be left with ${budgetDiff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${budgetDiff.toFixed(2)} leva needed.`);
    }
}

familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);
