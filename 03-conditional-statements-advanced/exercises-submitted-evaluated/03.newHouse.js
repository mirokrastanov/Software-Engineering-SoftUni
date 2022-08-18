function newHouse(input) {
    let type = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let total = 0;
    switch (type) {
        case ("Roses"):
            total = quantity * 5;
            if (quantity > 80) {
                total = total * 0.9;
            }
            break;
        case ("Dahlias"):
            total = quantity * 3.8;
            if (quantity > 90) {
                total = total * 0.85;
            }
            break;
        case ("Tulips"):
            total = quantity * 2.8;
            if (quantity > 80) {
                total = total * 0.85;
            }
            break;
        case ("Narcissus"):
            total = quantity * 3;
            if (quantity < 120) {
                total = total * 1.15;
            }
            break;
        case ("Gladiolus"):
            total = quantity * 2.5;
            if (quantity < 80) {
                total = total * 1.2;
            }
            break;
    }
    let priceDiff = Math.abs(budget - total);
    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${priceDiff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${priceDiff.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);