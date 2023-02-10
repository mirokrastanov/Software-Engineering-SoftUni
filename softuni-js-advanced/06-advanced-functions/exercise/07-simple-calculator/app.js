function calculator() {
    let elOne;
    let elTwo;
    let elResult;

    function init(selector1, selector2, resultSelector) {
        elOne = document.querySelector(selector1);
        elTwo = document.querySelector(selector2);
        elResult = document.querySelector(resultSelector);
    }
    function add() {
        elResult.value = Number(elOne.value) + Number(elTwo.value);
    }
    function subtract() {
        elResult.value = Number(elOne.value) - Number(elTwo.value);
    }

    return obj = {
        init,
        add,
        subtract,
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 