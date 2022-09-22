function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let output = sum % 1 === 0
        ? sum + ' - Integer'
        : sum + ' - Float';
    console.log(output);
}
solve(112.3, 212.3, 5)
