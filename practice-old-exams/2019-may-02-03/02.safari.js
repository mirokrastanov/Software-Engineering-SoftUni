function safari(input) {
    let budget = Number(input[0]);
    let gasQuantity = Number(input[1]);
    let currentDay = input[2];
    let gasPrice = 2.1;
    let tourGuide = 100;
    let discount = 0;

    switch (currentDay) {
        case "Saturday": discount = 0.9; break;
        case "Sunday": discount = 0.8; break;
        default: break;
    }
    let total = ((gasQuantity * gasPrice) + tourGuide) * discount;
    
    if (budget >= total) {
        console.log(`Safari time! Money left: ${(budget - total).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(total - budget).toFixed(2)} lv.`);
    }

}

safari(["1000", "10", "Sunday"]);
safari(["120", "30", "Saturday"]);
safari(["105.20", "15", "Sunday"]);