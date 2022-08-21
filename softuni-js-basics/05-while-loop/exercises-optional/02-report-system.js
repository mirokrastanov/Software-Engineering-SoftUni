function reportSystem(input) {
    let index = 0;
    let targetProfit = Number(input[index]);
    index++;
    let actualProfit = 0;
    let command = input[index];
    index++;
    let itemCounter = 0;
    let itemsSoldWithCash = 0;
    let itemsSoldWithCard = 0;
    let cashProfit = 0;
    let cardProfit = 0;

    while (command !== "End") {
        let itemPrice = Number(command);
        itemCounter++;
        if (itemCounter % 2 === 0) {
            if (itemPrice >= 10) {                      //must use card
                actualProfit += itemPrice;
                itemsSoldWithCard++;
                cardProfit += itemPrice;
                console.log(`Product sold!`);
            } else {
                console.log(`Error in transaction!`);
            }
        } else {                                        //must use cash
            if (itemPrice <= 100 && itemPrice >= 10) {
                actualProfit += itemPrice;
                itemsSoldWithCash++;
                cashProfit += itemPrice;
                console.log(`Product sold!`);
            } else {
                console.log(`Error in transaction!`);
            }
        }
        if (actualProfit >= targetProfit) {
            console.log(`Average CS: ${(cashProfit / itemsSoldWithCash).toFixed(2)}`);
            console.log(`Average CC: ${(cardProfit / itemsSoldWithCard).toFixed(2)}`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "End") {
        console.log(`Failed to collect required money for charity.`);
    }

}

reportSystem([
    '500',
    '120',
    '8',
    '63',
    '256',
    '78',
    '317'
]);
// reportSystem([
//     '600',
//     '86',
//     '150',
//     '98',
//     '227',
//     'End'
// ]);