function matchTickets(input) {
    let budget = Number(input[0]);
    let type = input[1];
    let members = Number(input[2]);
    let ticket = 0;
    let ticketsTotal = 0;
    let transport = 0;
    let leftoverMoney = 0;
    let priceDiff = 0;

    if (members >= 1 && members <= 4) {
        transport = 0.75 * budget;
    } else if (members >= 5 && members <= 9) {
        transport = 0.6 * budget;
    } else if (members >= 10 && members <= 24) {
        transport = 0.5 * budget;
    } else if (members >= 25 && members <= 49) {
        transport = 0.4 * budget;
    } else if (members >= 50) {
        transport = 0.25 * budget;
    }
    leftoverMoney = budget - transport;
    switch (type) {
        case ("VIP"): ticket = 499.99; break;
        case ("Normal"): ticket = 249.99; break;
        default: break;
    }
    ticketsTotal = ticket * members;
    priceDiff = Math.abs(leftoverMoney - ticketsTotal);
    if (leftoverMoney >= ticketsTotal) {
        console.log(`Yes! You have ${priceDiff.toFixed(2)} leva left.`);
    } else if (leftoverMoney < ticketsTotal) {
        console.log(`Not enough money! You need ${priceDiff.toFixed(2)} leva.`);
    }

}

matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);
