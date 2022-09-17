function multiplicationTable(number) {
    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        let result = number * multiplier;
        console.log(`${number} X ${multiplier} = ${result}`);
    }

}

multiplicationTable(5);