function backToThePast(input) {
    let inheritance = Number(input[0]);
    let lastYear = Number(input[1]);
    let currentAge = 18;

    for (let year = 1800; year <= lastYear; year++) {
        if (year % 2 == 0) {
            inheritance -= 12000;
        } else {
            inheritance -= 12000 + 50 * currentAge;
        }
        currentAge++;
    }
    if (inheritance >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritance.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(inheritance).toFixed(2)} dollars to survive.`);
    }


}

backToThePast(['50000', '1802']);
// backToThePast(['100000.15', '1808']);
