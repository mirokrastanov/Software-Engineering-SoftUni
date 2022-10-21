function equalNumbers(inputArr) {
    let array1 = inputArr[0];
    let array2 = inputArr[1];
    let array3 = inputArr[2];
    let array4 = inputArr[3];
    let pairsFound = [];

    for (let i = 0; i < array1.length; i++) {
        let iPlus1 = i + 1;
        let iMinus1 = i - 1;
        if (i == 0) {
            iMinus1 = i;
        }
        if (i == array1.length - 1) {
            iPlus1 = i;
        }
        let current1 = array1[i];
        if (current1 == array1[i - 1] || current1 == array1[i + 1]) {
            if (!(pairsFound.includes(current1))) {
                pairsFound.push(current1);
            }
        }
        let current2 = array2[i];
        if (current2 == array2[i - 1] || current2 == array1[i] || current2 == array2[i + 1] || current2 == array1[i]) {
            if (!(pairsFound.includes(current2))) {
                pairsFound.push(current2);
            }
        }
        if (inputArr.length >= 3) {
            let current3 = array3[i];
            if (current3 == array3[i - 1] || current3 == array2[i] || current3 == array3[i + 1] || current3 == array2[i]) {
                if (!(pairsFound.includes(current3))) {
                    pairsFound.push(current3);
                }
            }
        }
        if (inputArr.length >= 4) {
            let current4 = array4[i];
            if (current4 == array4[i - 1] || current4 == array4[i + 1]) {
                if (!(pairsFound.includes(current4))) {
                    pairsFound.push(current4);
                }
            }
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

        // for (let j = 0; j < array2.length; j++) {
        //     for (let k = 0; k < array3.length; k++) {
        //         for (let m = 0; m < array4.length; m++) {
        //         }
        //     }
        // }