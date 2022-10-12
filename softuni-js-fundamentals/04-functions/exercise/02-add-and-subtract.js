
function addAndSubtract(num1, num2, num3) {

    let sum = function() {
        return num1 + num2;
    }
    let subtract = function() {
        return sum() - num3;
    }
    let result = subtract();
    console.log(result);
}
addAndSubtract(23, 6, 10);

