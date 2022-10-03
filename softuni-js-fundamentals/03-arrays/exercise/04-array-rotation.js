function arrayRotation(inputArray, inputNum) {
    let output = "";
    let storedArray = inputArray;

    for (let rotation = 1; rotation <= inputNum; rotation++) {
        let currentArray = [];
        for (let i = 0; i < storedArray.length; i++) {
            if (i < storedArray.length - 1) {
                currentArray[i] = storedArray[i + 1];
            } else {
                currentArray[i] = storedArray[0];
            }
        }
        storedArray = currentArray;
    }
    let resultingArray = storedArray;
    for (let i = 0; i < resultingArray.length; i++) {
        if (i < resultingArray.length - 1) {
            output += `${resultingArray[i]} `;  
        } else {
            output += `${resultingArray[i]}`; 
        }
    }
    console.log(output);

}

arrayRotation(
    [51, 47, 32, 61, 21], 2
);