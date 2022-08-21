function numDivisibleBy9(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let buff = "";

    for (let i = n; i <= m; i++) {
        if (i % 9 == 0) {
            sum += i;
            buff += i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);

}

numDivisibleBy9(["100", "200"]);
