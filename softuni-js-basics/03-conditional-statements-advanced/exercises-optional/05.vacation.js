function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let location = 0;
    let accomType = 0;

    switch (season) {
        case "Summer": location = "Alaska"; break;
        case "Winter": location = "Morocco"; break;
        default: break;
    }
    if (budget <= 1000) {
        accomType = "Camp";
        switch (season) {
            case "Summer": price = 0.65 * budget; break;
            case "Winter": price = 0.45 * budget; break;
            default: break;
        }
    } else if (budget > 1000 && budget <= 3000) {
        accomType = "Hut";
        switch (season) {
            case "Summer": price = 0.8 * budget; break;
            case "Winter": price = 0.6 * budget; break;
            default: break;
        }
    } else if (budget > 3000) {
        accomType = "Hotel";
        price = 0.9 * budget;
    }
    console.log(`${location} - ${accomType} - ${price.toFixed(2)}`);


}

vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["1100", "Summer"]);
vacation(["5000", "Winter"]);
vacation(["2543.99", "Winter"]);
