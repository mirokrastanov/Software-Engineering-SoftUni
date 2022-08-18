function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothingPrice = Number(input[2]);
    let decor = budget * 0.1;
    if (extras > 150) {
        clothingPrice *= 0.9;
    }
    let cost = decor + (clothingPrice * extras);
    if (cost > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(cost - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - cost).toFixed(2)} leva left.`);
    }


}

godzillaVsKong(["20000",
    "120",
    "55.5"]);
godzillaVsKong(["15437.62",
    "186",
    "57.99"]);
godzillaVsKong(["9587.88",
    "222",
    "55.68"]);
