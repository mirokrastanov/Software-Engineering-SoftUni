function repainting(input) {
    let nylon = (Number(input[0]) * 1.50) + (2 * 1.50);
    let paint = 1.10 * (Number(input[1]) * 14.50);
    let paintThinner = (Number(input[2]) * 5.00);
    let price = nylon + paint + paintThinner + 0.40;
    let payPerHour = price * 0.30;
    let workHours = Number(input[3]);
    let overallCost = price + (payPerHour * workHours);
    console.log(overallCost);
}

repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);
