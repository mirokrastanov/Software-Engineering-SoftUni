function foodDelivery(input) {
    let chicken = Number(input[0]) * 10.35;
    let fish = Number(input[1]) * 12.40;
    let vegetarian = Number(input[2]) * 8.15;
    let dessert = 0.20 * (chicken + fish + vegetarian);
    let costs = chicken + fish + vegetarian + dessert + 2.50;
    console.log(costs);
}

foodDelivery(["2", "4", "3"]);
foodDelivery(["9", "2", "6"]);
