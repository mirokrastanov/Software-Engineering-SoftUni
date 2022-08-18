function finalCompetition(input) {
    let dancerCount = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let money = 0;

    switch (place) {
        case "Bulgaria":
            money = dancerCount * points;
            switch (season) {
                case "summer": money *= 0.95; break;
                case "winter": money *= 0.92; break;
                default: break;
            }
            break;
        case "Abroad":
            money = dancerCount * points * 1.5;
            switch (season) {
                case "summer": money *= 0.9; break;
                case "winter": money *= 0.85; break;
                default: break;
            }
            break;
        default: break;
    }
    let charity = money * 0.75;
    money *= 0.25;
    let moneyPer = money / dancerCount;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPer.toFixed(2)}`);

}


finalCompetition(["1",
    "89.5",
    "summer",
    "Abroad"]);
finalCompetition(["25",
    "98",
    "winter",
    "Bulgaria"]);
