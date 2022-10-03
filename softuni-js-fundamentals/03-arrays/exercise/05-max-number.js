function maxNumber(inputArray) {
    let isTopInt = true;
    let output = "";

    for (let i = 0; i < inputArray.length; i++) {
        let currentInt = inputArray[i];
        for (let j = i + 1; j < inputArray.length; j++) {
            let nextInt = inputArray[j];
            if (currentInt <= nextInt) {
                isTopInt = false;
            }
            if (!isTopInt) {
                break;
            }
        }
        if (isTopInt) {
            if (i == inputArray.length - 1) {
                output += `${currentInt}`;
            } else {
                output += `${currentInt} `;
            }
        } else {
            isTopInt = true;
        }
    }
    console.log(output);

}

maxNumber([1, 4, 3, 2]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);