function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let budgetRemaining = budget;
    let command = input[index];
    index++;
    let itemsCounter = 0;

    while (command !== "Stop") {
        let product = command;
        let productPrice = Number(input[index]);
        index++;
        itemsCounter++;
        if (itemsCounter % 3 === 0) {
            productPrice *= 0.5;
        }
        if (budgetRemaining < productPrice) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${(productPrice - budgetRemaining).toFixed(2)} leva!`);
            break;
        }
        budgetRemaining -= productPrice;

        command = input[index];
        index++;
    }

    if (command === "Stop") {
        console.log(`You bought ${itemsCounter} products for ${(budget - budgetRemaining).toFixed(2)} leva.`);
    }


}


// touristShop([
//     "153.20",
//     "Backpack",
//     "25.20",
//     "Shoes",
//     "54",
//     "Sunglasses",
//     "30",
//     "Stop"
// ])
// touristShop([
//     "54",
//     "Thermal underwear",
//     "24",
//     "Sunscreen",
//     "45"
// ])
touristShop([
    "300",
    "Thermal underwear",
    "50",
    "Sunscreen",
    "50",
    "Thermal underwear",
    "50",
    "Sunscreen",
    "50",
    "Thermal underwear",
    "50",
    "Sunscreen",
    "50",
    "Thermal underwear",
    "50",
    "Sunscreen",
    "50"
])