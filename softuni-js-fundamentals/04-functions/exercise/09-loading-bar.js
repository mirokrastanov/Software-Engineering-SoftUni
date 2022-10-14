function loadingBar(inputNum) {

    // alternative solution -> using .repeat method for the (.) & (%) symbols

    let createBar = function (inputNum) {
        let output = [];
        for (let i = 1; i <= 10; i++) {
            output.push('.');
        }
        return output;
    };
    let fillBar = function (inputArr) {
        let outputArr = inputArr;
        for (let i = 0; i < inputNum / 10; i++) {
            outputArr[i] = '%';
        }
        return outputArr;
    };
    let addBorders = function (inputArr) {
        let finalArr = [];
        for (let i = inputArr.length; i >= 0; i--) {
            if (i > 0) {
                finalArr[i] = inputArr[i - 1];
            } else {
                finalArr[i] = '[';
            }
        }
        finalArr.push(']');
        return finalArr;
    };

    let barCreated = createBar(inputNum);
    let barFilled = fillBar(barCreated);
    let barWithBorders = addBorders(barFilled);
    let result = barWithBorders.join("");
    
    
    if (inputNum != 100) {
        console.log(`${inputNum}% ${result}`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(result);
    }

};

loadingBar(30);
// loadingBar(50);
// loadingBar(100);
