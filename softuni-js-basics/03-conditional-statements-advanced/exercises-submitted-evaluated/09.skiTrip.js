function skiTrip(input) {
    let days = Number(input[0]);
    let accommodationType = input[1];
    let feedback = input[2];
    let nights = days - 1;
    let pricePer = 0;
    let total = 0;

    switch (accommodationType) {
        case ("room for one person"):
            pricePer = 18;
            total = pricePer * nights;
            break;
        case ("apartment"):
            pricePer = 25;
            total = pricePer * nights;
            if (days < 10) {
                total = total * 0.7;
            } else if (days >= 10 && days <= 15) {
                total = total * 0.65;
            } else if (days > 15) {
                total = total * 0.5;
            }
            break;
        case ("president apartment"):
            pricePer = 35;
            total = pricePer * nights;
            if (days < 10) {
                total = total * 0.9;
            } else if (days >= 10 && days <= 15) {
                total = total * 0.85;
            } else if (days > 15) {
                total = total * 0.8;
            }
            break;
        default: break;
    }
    switch (feedback) {
        case ("positive"): total = total * 1.25; break;
        case ("negative"): total = total * 0.9; break;
        default: break;
    }
    console.log(total.toFixed(2));

}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
