function sumOfNumbers(input) {
    let n = String(input[0]);
    let nLength = n.length;
    let char = 0;
    let result = 0;

    for (let i = 0; i < nLength; i++) {
        char = Number(n[i]);
        result += char;
    }
    console.log(`The sum of the digits is:${result}`);

}

sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);
