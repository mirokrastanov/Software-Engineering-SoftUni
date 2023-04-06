function coins(input) {
    let change = Number(input[0]);
    let coins = 0;

    while (change > 0) {
        change = Number(change.toFixed(2));
        coins++;
        if (change >= 2) change -= 2;
        else if (change >= 1) change -= 1;
        else if (change >= 0.5) change -= 0.5;
        else if (change >= 0.2) change -= 0.2;
        else if (change >= 0.1) change -= 0.1;
        else if (change >= 0.05) change -= 0.05;
        else if (change >= 0.02) change -= 0.02;
        else if (change >= 0.01) change -= 0.01;
    }
    console.log(coins);
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
