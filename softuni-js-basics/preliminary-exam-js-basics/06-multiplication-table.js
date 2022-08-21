function multiplicationTable(input) {
    let number = String(input);
    let digit3 = number[2];
    let digit2 = number[1];
    let digit1 = number[0];

    if (digit1 > 0 && digit2 > 0 && digit3 > 0) {
        for (let i = 1; i <= digit3; i++) {
            for (let k = 1; k <= digit2; k++) {
                for (let j = 1; j <= digit1; j++) {
                    let res = i * k * j;
                    console.log(`${i} * ${k} * ${j} = ${res};`);
                }
            }
        }
    }


}


multiplicationTable(["324"]);
multiplicationTable(["222"]);
