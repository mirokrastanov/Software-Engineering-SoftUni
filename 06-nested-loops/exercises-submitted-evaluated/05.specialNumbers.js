function specialNumbers(input) {
    let num = Number(input);
    let result = "";

    for (let i = 1111; i <= 9999; i++) {
        let currentStr = String(i);
        let isMagic = true;

        for (let j = 0; j < currentStr.length; j++) {
            let currentDigit = Number(currentStr[j]);
            if (num % currentDigit !== 0) {
                isMagic = false;
                break;
            }
        }
        if (isMagic) {
            result += `${currentStr} `;
        }
    }
    console.log(result);

}

specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);