function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let oddEven = 0;

    switch (operator) {
        case ("+"):
            result = n1 + n2;
            if (result % 2 === 0) {
                oddEven = "even";
            } else {
                oddEven = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${oddEven}`);
            break;
        case ("-"):
            result = n1 - n2;
            if (result % 2 === 0) {
                oddEven = "even";
            } else {
                oddEven = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${oddEven}`);
            break;
        case ("*"):
            result = n1 * n2;
            if (result % 2 === 0) {
                oddEven = "even";
            } else {
                oddEven = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${oddEven}`);
            break;
        case ("/"):
            result = n1 / n2;
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            }
            break;
        case ("%"):
            result = n1 % n2;
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;
        default:
            break;
    }

}

operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["10", "0", "%"]);
operationsBetweenNumbers(["7", "3", "*"]);
