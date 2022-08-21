function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let boatPrice = 0;
    let total = 0;

    switch (season) {
        case ("Spring"):
            boatPrice = 3000;
            if (fishermen % 2 === 0) {
                boatPrice = boatPrice * 0.95;
            }
            break;
        case ("Summer"):
            boatPrice = 4200;
            if (fishermen % 2 === 0) {
                boatPrice = boatPrice * 0.95;
            }
            break;
        case ("Autumn"):
            boatPrice = 4200;
            break;
        case ("Winter"):
            boatPrice = 2600;
            if (fishermen % 2 === 0) {
                boatPrice = boatPrice * 0.95;
            }
            break;
        default:
            break;
    }
    if (fishermen <= 6) {
        total = boatPrice * 0.9;
    } else if (fishermen > 6 && fishermen <= 11) {
        total = boatPrice * 0.85;
    } else if (fishermen >= 12) {
        total = boatPrice * 0.75;
    }
    let PriceDiff = Math.abs(budget - total);
    if (budget >= total) {
        console.log(`Yes! You have ${PriceDiff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${PriceDiff.toFixed(2)} leva.`);
    }
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);