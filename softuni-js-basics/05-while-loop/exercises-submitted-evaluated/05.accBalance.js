function accBalance(input) {
    let index = 0;
    let deposit = input[index];
    let money = 0;

    while (String(deposit) !== "NoMoreMoney") {
        if (deposit < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        money += Number(deposit);
        console.log(`Increase: ${Number(deposit).toFixed(2)}`);

        index++;
        deposit = input[index];
    }
    console.log(`Total: ${money.toFixed(2)}`);

}

accBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);
accBalance(["120",
"45.55",
"-150"]);

