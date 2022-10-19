function bombNumbers(mainArr, funcArr) {
    let bomb = Number(funcArr[0]);
    let power = Number(funcArr[1]);
    let finalArray = mainArr.slice();

    function bombIndex(inputArr) {
        let output = inputArr.indexOf(bomb);
        return output;
    }

    let currentBomb = bombIndex(finalArray);

    while (currentBomb != -1) {
        let startIndex = Math.max(currentBomb - power, 0);
        finalArray.splice(startIndex, (2 * power + 1));
        currentBomb = bombIndex(finalArray);
    }

    finalArray.map(Number);
    console.log(finalArray.reduce((a, b) => a + b, 0));

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
// bombNumbers([1, 1, 3, 1, 2, 1, 7, 1, 1, 9, 1], [1, 0]);
// bombNumbers([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2]);