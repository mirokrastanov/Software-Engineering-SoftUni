function energyBooster(input) {
    let fruit = input[0];
    let set = input[1];
    let setsOrdered = Number(input[2]);
    let pricePer = 0;
    let packsPerSet = 0;

    switch (set) {
        case "small": packsPerSet = 2;
            switch (fruit) {
                case "Watermelon": pricePer = 56; break;
                case "Pineapple": pricePer = 42.1; break;
                case "Raspberry": pricePer = 20; break;
                case "Mango": pricePer = 36.66; break;
                default: break;
            }
            break;
        case "big": packsPerSet = 5;
            switch (fruit) {
                case "Watermelon": pricePer = 28.7; break;
                case "Pineapple": pricePer = 24.8; break;
                case "Raspberry": pricePer = 15.2; break;
                case "Mango": pricePer = 19.6; break;
                default: break;
            }
            break;
    }
    let total = setsOrdered * packsPerSet * pricePer;
    if (total >= 400 && total <= 1000) {
        total = 0.85 * total;
    } else if (total > 1000) {
        total = total * 0.5;
    }
    console.log(`${total.toFixed(2)} lv.`);

}

energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Pineapple", "small", "1"]);
energyBooster(["Raspberry", "small", "50"]);
energyBooster(["Mango", "big", "8"]);