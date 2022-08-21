function flowerShop(input) {
    let magnoliaCount = Number(input[0]);
    let hyacinthCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let giftPrice = Number(input[4]);
    let magnoliaTotal = magnoliaCount * 3.25;
    let hyacinthTotal = hyacinthCount * 4;
    let roseTotal = roseCount * 3.5;
    let cactusTotal = cactusCount * 8;
    let orderPrice = magnoliaTotal + hyacinthTotal + roseTotal + cactusTotal;
    let earnings = 0.95 * orderPrice;
    let moneyDiff = Math.abs(giftPrice - earnings);
    if (earnings >= giftPrice) {
        console.log(`She is left with ${Math.floor(moneyDiff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(moneyDiff)} leva.`);
    }
}

flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);
