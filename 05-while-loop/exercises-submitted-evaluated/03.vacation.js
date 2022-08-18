function vacation(input) {
    index = 0;
    let tripCost = Number(input[index]);
    index++;
    let moneySaved = Number(input[index]);
    index++;
    let spendCounter = 0;
    let daysCounter = 0;
    let transactionType = input[index];
    index++;
    daysCounter++;
    let transactionAmount = Number(input[index]);
    index++;

    while (index <= input.length) {
        switch (transactionType) {
            case "spend": moneySaved -= transactionAmount; spendCounter++; break;
            case "save": moneySaved += transactionAmount; spendCounter = 0; break;
            default: break;
        }
        if (moneySaved < 0) {
            moneySaved = 0;
        }
        if (spendCounter === 5) {
            console.log(`You can't save the money.`);
            console.log(`${daysCounter}`);
            break;
        }
        if (moneySaved >= tripCost) {
            console.log(`You saved the money for ${daysCounter} days.`);
            break;
        }
        transactionType = input[index];
        index++;
        daysCounter++;
        transactionAmount = Number(input[index]);
        index++;
    }
}

vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"]);
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);
