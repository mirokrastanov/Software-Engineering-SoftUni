function perfectNumber(input) {
    let numberDividers = function (inputNumber) {
        let output = [];
        for (let num = 1; num < inputNumber; num++) {
            if (inputNumber % num == 0) {
                output.push(num);
            }
        }
        return output;
    };
    let sumOfDividers = function (inputArr) {
        let arrLength = inputArr.length;
        let sum = 0;
        for (let i = 0; i < arrLength; i++) {
            sum += Number(inputArr[i]);
        }
        return sum;
    };
    let isPerfect = function (inputSum) {
        if (inputSum == input) {
            return true;
        } else {
            return false;
        }
    };
    let firstStep = numberDividers(input);
    let secondStep = sumOfDividers(firstStep);
    let thirdStep = isPerfect(secondStep);

    if (thirdStep) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }

}

perfectNumber(1236498);
// perfectNumber(6);
// perfectNumber(28);