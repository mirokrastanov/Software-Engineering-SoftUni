function mergeArrays(array1, array2) {
    let resultArray = [];
    let resultOutput = "";

    for (let i = 0; i < array1.length; i++) {
        let array1Current = array1[i];
        let array2Current = array2[i];
        if (i % 2 == 0) {
            resultArray[i] = Number(array1Current) + Number(array2Current);
        } else {
            resultArray[i] = array1Current.toString() + array2Current.toString();
        }
        if (i < (array1.length - 1)) {
            resultOutput += `${resultArray[i]} - `
        } else {
            resultOutput += `${resultArray[i]}`
        }

    }
    console.log(resultOutput);

}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);