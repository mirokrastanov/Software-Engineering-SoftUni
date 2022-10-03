function addAndSubtract(inputArray) {
    let newArray = inputArray;
    let inputArraySum = 0;
    let newArraySum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        let currentNum = Number(inputArray[i]);
        if (currentNum % 2 == 0) {
            newArray[i] = currentNum + i;
        } else {
            newArray[i] = currentNum - i;
        }
        inputArraySum += inputArray[i];
        newArraySum += currentNum;
    }
    console.log(newArray);
    console.log(newArraySum);
    console.log(inputArraySum);

}

addAndSubtract([5, 15, 23, 56, 35]);