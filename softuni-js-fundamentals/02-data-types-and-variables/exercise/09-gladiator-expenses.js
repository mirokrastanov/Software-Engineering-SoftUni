function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBroken = false;
    let swordBroken = false;
    let expenses = 0;
    let shieldBrokenCounter = 0;

    for (let lostFight = 1; lostFight <= lostFights; lostFight++) {
        if (lostFight % 2 == 0) {
            helmetBroken = true;
            expenses += helmetPrice;
        }
        if (lostFight % 3 == 0) {
            swordBroken = true;
            expenses += swordPrice;
        }
        if (helmetBroken && swordBroken) {
            expenses += shieldPrice;
            shieldBrokenCounter++;
            if (shieldBrokenCounter % 2 == 0) {
                expenses += armorPrice;
            }
        }
        helmetBroken = false;
        swordBroken = false;
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiatorExpenses(
    23,
    12.50,
    21.50,
    40,
    200
);