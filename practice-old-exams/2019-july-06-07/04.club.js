function club(input) {
    let earningsGoal = Number(input[0]);
    let earningsActual = 0;
    let cocktail = "";
    let cocktailPricePer = 0;
    let cocktailQuantity = 0;
    let earningsDiff = 0;
    let orderPrice = 0;

    for (let i = 1; i < input.length; i += 2) {
        cocktail = String(input[i]);
        if (cocktail === "Party!") {
            console.log(`We need ${earningsDiff.toFixed(2)} leva more.`);
            console.log(`Club income - ${earningsActual.toFixed(2)} leva.`);
            break;
        }
        cocktailPricePer = cocktail.length;
        cocktailQuantity = Number(input[i + 1]);
        orderPrice = cocktailPricePer * cocktailQuantity;
        if (orderPrice % 2 != 0) {
            orderPrice *= 0.75;
        }
        earningsActual += orderPrice;
        earningsDiff = Math.abs(earningsActual - earningsGoal);
        if (earningsActual >= earningsGoal) {
            console.log(`Target acquired.`);
            console.log(`Club income - ${earningsActual.toFixed(2)} leva.`);
            break;
        }
    }

}

club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
