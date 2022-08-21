function coffeeMachine(input) {
    let drinkType = input[0];
    let sugar = input[1];
    let drinkCount = Number(input[2]);
    let espressoPrice = 0;
    let cappuccinoPrice = 0;
    let teaPrice = 0;
    let totalPrice = 0;
    if (drinkType === "Espresso") {
        if (sugar === "Without") {
            espressoPrice = 0.9;
            espressoPrice = 0.65 * espressoPrice;
        } else if (sugar === "Normal") {
            espressoPrice = 1;
        } else if (sugar === "Extra") {
            espressoPrice = 1.2;
        }
        if (drinkCount >= 5) {
            espressoPrice = 0.75 * espressoPrice;
        }
        totalPrice = drinkCount * espressoPrice;
    } else if (drinkType === "Cappuccino") {
        if (sugar === "Without") {
            cappuccinoPrice = 1;
            cappuccinoPrice = 0.65 * cappuccinoPrice;
        } else if (sugar === "Normal") {
            cappuccinoPrice = 1.2;
        } else if (sugar === "Extra") {
            cappuccinoPrice = 1.6;
        }
        totalPrice = drinkCount * cappuccinoPrice;
    } else if (drinkType === "Tea") {
        if (sugar === "Without") {
            teaPrice = 0.5;
            teaPrice = 0.65 * teaPrice;
        } else if (sugar === "Normal") {
            teaPrice = 0.6;
        } else if (sugar === "Extra") {
            teaPrice = 0.7;
        }
        totalPrice = drinkCount * teaPrice;
    }
    if (totalPrice > 15) {
        totalPrice = 0.8 * totalPrice;
    }
    console.log(`You bought ${drinkCount} cups of ${drinkType} for ${totalPrice.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"]);
