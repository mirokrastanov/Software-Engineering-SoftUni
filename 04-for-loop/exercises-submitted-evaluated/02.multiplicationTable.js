function multiplicationTable(input) {
    let n = Number(input[0]);
    let res = 0;
    if (n >= 1 && n <= 10) {
        for (let i = 1; i <= 10; i++) {
            res = i * n;
            console.log(`${i} * ${n} = ${res}`);
        }
    }
}

multiplicationTable(["5"]);
