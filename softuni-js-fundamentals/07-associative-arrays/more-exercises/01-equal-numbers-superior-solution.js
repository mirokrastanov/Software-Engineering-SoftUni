function equalNumbers(inputArr) {
    let workingArr = inputArr.slice();
    let tempArr = [];
    let pairsFound = [];
    let singleArrayLength = inputArr[0].length;

    for (let i = 0; i < workingArr.length; i++) {
        let current = workingArr[i];
        for (let j = 0; j < current.length; j++) {
            let elToPush = current[j];
            tempArr.push(elToPush);
        }
    }
    let tempL = tempArr.length;
    for (let i = 0; i < tempL; i++) {
        if (i % singleArrayLength == 0 && i != 0) {
            for (let i = 0; i < singleArrayLength; i++) {
                tempArr.shift();
            }
            i = 0;
            tempL -= singleArrayLength;
        }
        let current = tempArr[i];
        let top = tempArr[i - singleArrayLength];
        let bottom = tempArr[i + singleArrayLength];
        let right = tempArr[i + 1];
        if (i == singleArrayLength - 1) {
            right = undefined;
        }
        if (current == top) {
            pairsFound.push(current);
        }
        if (current == bottom) {
            pairsFound.push(current);
        }
        if (current == right) {
            pairsFound.push(current);
        }
    }
    console.log(pairsFound.length);

}

equalNumbers(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);
equalNumbers(
    [['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']]
);
