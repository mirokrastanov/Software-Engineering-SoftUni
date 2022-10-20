function distinctArray(inputArr) {
    let resultArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let current = inputArr[i];
        if (!resultArr.includes(current)) {
            resultArr.push(current);
        }
    }
    console.log(resultArr.join(" "));

}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);