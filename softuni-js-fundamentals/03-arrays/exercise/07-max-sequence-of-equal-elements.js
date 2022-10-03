function equalElements(inputArray) {
    let arrLength = inputArray.length;
    let equalCounter = 1;
    let equalNumber = 0;
    let equalNumberFound = false;
    let bestEqualNumber = 0;
    let bestEqualCounter = 1;
    let previous = 0;
    let outputString = "";

    for (let i = 0; i < arrLength; i++) {
        let current = inputArray[i];
        if (i == 0) {
            previous = current;
        } else {
            if (previous == current) {
                equalCounter++;
                equalNumber = current;
                if (equalCounter > bestEqualCounter) {
                    bestEqualCounter = equalCounter;
                    bestEqualNumber = current;
                }
                if (equalCounter > 1) {
                    equalNumberFound = true;
                }
            } else {
                equalCounter = 1;
            }
            previous = current;
        }
    }
    if (equalNumberFound) {
        for (let output = 1; output <= bestEqualCounter; output++) {
            outputString += `${bestEqualNumber} `;
        }
        console.log(outputString);
    }

}

equalElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);