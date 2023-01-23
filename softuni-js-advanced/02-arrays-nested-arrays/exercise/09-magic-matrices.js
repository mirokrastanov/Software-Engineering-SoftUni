function magicMatrices(input) {
    let isMagic = true;
    let lastRowSum;
    let lastColSum;

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i];
        let currentRowSum = 0;
        currentRow.forEach(element => {
            currentRowSum += element;
        });
        let currentColSum = 0;
        for (let j = 0; j < input.length; j++) {
            currentColSum += input[j][i];
        }
        if (i == 0) {
            lastRowSum = currentRowSum;
            lastColSum = currentColSum;
            continue;
        }
        if (!checkMagic(lastRowSum, currentRowSum) || !checkMagic(lastColSum, currentColSum)) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);

    function checkMagic(last, current) {
        return last == current;
    }
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);