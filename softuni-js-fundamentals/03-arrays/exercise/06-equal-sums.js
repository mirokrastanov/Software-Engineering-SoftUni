function equalSums(inputArray) {
    let leftSum = 0;
    let rightSum = 0;
    let indexFound = false;

    for (let i = 0; i < inputArray.length; i++) {
        let currentNum = inputArray[i];
        for (let left = 0; left < i; left++) {
            leftSum += inputArray[left];
        }
        for (let right = inputArray.length - 1; right > i; right--) {
            rightSum += inputArray[right];
        }
        if (i == 0) {
            leftSum = 0;
        } else if (i == inputArray.length - 1) {
            rightSum = 0;
        }
        if (leftSum == rightSum) {
            console.log(i);
            indexFound = true;
        }
        leftSum = 0;
        rightSum = 0;
    }
    if (!indexFound) {
        console.log('no');
    }

}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);