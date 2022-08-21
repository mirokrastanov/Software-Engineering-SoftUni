function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    // end IS GREATER than start (rule - default)
    let magic = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let x1 = start; x1 <= end; x1++) {
        for (let x2 = start; x2 <= end; x2++) {
            counter++;
            if (x1 + x2 === magic) {
                isFound = true;
                console.log(`Combination N:${counter} (${x1} + ${x2} = ${magic})`);
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magic}`);
    }

}

sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);