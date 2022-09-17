function printAndSum(num1, num2) {
    let sum = 0;
    let buffer = "";
    for (let current = num1; current <= num2; current++) {
        buffer += `${current} `;
        sum += current;
    }
    console.log(buffer);
    console.log(`Sum: ${sum}`);

}

printAndSum(50, 60);