function factorialDivision(num1, num2) {

    // let calculateFactorial = function (inputNum) {
    //     let total = inputNum;
    //     for (let num = inputNum - 1; num > 0; num--) {
    //         total *= num;
    //     }
    //     return total;
    // };

    var total = 0;
    let calculateFactorial = function (x) {
        if (x > 0) {
            total *= x;
            calculateFactorial(x - 1);
        } else {
            return;
        }
    }
    let postCalc = function (num) {
        total = num;
        calculateFactorial(num - 1);
        let output = total;
        total = 0;
        return output;
    };
    let result = postCalc(num1) / postCalc(num2);
    console.log(result.toFixed(2));

}

factorialDivision(5, 2);
factorialDivision(6, 2);