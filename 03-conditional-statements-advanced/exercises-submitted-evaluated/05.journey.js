function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let costs = 0;
    let accommodation = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case ("summer"):
                costs = budget * 0.3;
                accommodation = "Camp";
                break;
            case ("winter"):
                costs = budget * 0.7;
                accommodation = "Hotel";
                break;
            default:
                break;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case ("summer"):
                costs = budget * 0.4;
                accommodation = "Camp";
                break;
            case ("winter"):
                costs = budget * 0.8;
                accommodation = "Hotel";
                break;
            default:
                break;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        costs = budget * 0.9;
        accommodation = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${costs.toFixed(2)}`);
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);
