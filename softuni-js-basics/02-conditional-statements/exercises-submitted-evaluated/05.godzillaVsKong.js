function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extraActorCount = Number(input[1]);
    let clothingPrice = Number(input[2]);
    let decor = 0.1 * budget;
    if (extraActorCount > 150) {
        clothingPrice = 0.9 * clothingPrice;
    } else {
        clothingPrice = clothingPrice;
    }
    let totalCosts = (clothingPrice * extraActorCount) + decor;
    if (totalCosts > budget) {
        console.log("Not enough money!");
        let notEnough = totalCosts - budget;
        console.log(`Wingard needs ${notEnough.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        let leftoverMoney = budget - totalCosts;
        console.log(`Wingard starts filming with ${leftoverMoney.toFixed(2)} leva left.`);   
    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
