function harvest(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);
    let grapeTotal = x * y;
    let z1 = (0.4 * grapeTotal) / 2.5;
    let zDiff = Math.abs(z - z1);
    if (z1 < z) {
        console.log(`It will be a tough winter! More ${Math.floor(zDiff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${z1} liters.`);
        console.log(`${Math.floor(zDiff)} liters left -> ${Math.ceil(zDiff / workers)} liters per person.`);
    }

}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);
