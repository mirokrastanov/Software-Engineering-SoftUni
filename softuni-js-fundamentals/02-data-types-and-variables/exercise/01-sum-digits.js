function sumDigits(num1) {
    let numAsStr = num1.toString();
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i++) {
        let currentDigit = Number(numAsStr[i]);
        sum += currentDigit;
    }
    console.log(sum);
}

sumDigits(245678);
