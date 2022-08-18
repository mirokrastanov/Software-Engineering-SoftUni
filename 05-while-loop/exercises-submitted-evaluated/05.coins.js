function coins(input) {
    let change = Number(input[0]);
    let coins = 0;
    let remainder = change;

    while (remainder > 0) {
        if (remainder >= 2) {
            coins++;
            remainder -= 2;
            remainder = Number(remainder.toFixed(2));
            continue;
        } else if (remainder >= 1) {
            coins++;
            remainder -= 1;
            remainder = Number(remainder.toFixed(2));
            continue;
        } else if (remainder >= 0.5) {
            coins++;
            remainder -= 0.5;
            remainder = Number(remainder.toFixed(2));
            continue;
        } else if (remainder >= 0.2) {
            coins++;
            remainder -= 0.2;
            remainder = Number(remainder.toFixed(2));
            continue;
        } else if (remainder >= 0.1) {
            coins++;
            remainder -= 0.1;
            remainder = Number(remainder.toFixed(2));
            continue;
        } else if (remainder >= 0.05) {
            coins++;
            remainder -= 0.05;
            remainder = Number(remainder.toFixed(2));
            continue;
        } else if (remainder >= 0.02) {
            coins++;
            remainder -= 0.02;
            remainder = Number(remainder.toFixed(2));
            continue;
        } else if (remainder >= 0.01) {
            coins++;
            remainder -= 0.01;
            remainder = Number(remainder.toFixed(2));
            continue;
        }
    }
    console.log(coins);
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
