function factorialDivision(num1, num2) {
    let calculateFactorial = function (inputNum) {
        let total = inputNum;
        for (let num = inputNum - 1; num > 0; num--) {
            total *= num;
        }
        return total;
    };

    let result = calculateFactorial(num1) / calculateFactorial(num2);
    console.log(result.toFixed(2));

}

factorialDivision(5, 2);
factorialDivision(6, 2);