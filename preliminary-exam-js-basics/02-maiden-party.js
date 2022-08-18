function maidenParty(input) {
    let costs = Number(input[0]);
    let loveLetters = Number(input[1]);
    let waxRoses = Number(input[2]);
    let keychains = Number(input[3]);
    let drawings = Number(input[4]);
    let luckySurprises = Number(input[5]);
    let orderQuantity = loveLetters + waxRoses + keychains + drawings + luckySurprises;

    let earnings = (loveLetters * 0.6) + (waxRoses * 7.2) + (keychains * 3.6) + (drawings * 18.20) + (luckySurprises * 22);
    if (orderQuantity >= 25) {
        earnings *= 0.65;
    }
    earnings *= 0.9;

    if (earnings >= costs) {
        console.log(`Yes! ${(earnings - costs).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(costs - earnings).toFixed(2)} lv needed.`);
    }


}
maidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"]);
maidenParty(["320",
"8",
"2",
"5",
"5",
"1"]);
