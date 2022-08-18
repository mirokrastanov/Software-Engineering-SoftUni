function petShop(input) {
    let dogFood = 2.50;
    let catFood = 4.00;
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);
    let overallValue = (dogFood * dogFoodCount)+(catFood * catFoodCount);

    console.log(`${overallValue} lv.`);
}

petShop(["5", "4"]);