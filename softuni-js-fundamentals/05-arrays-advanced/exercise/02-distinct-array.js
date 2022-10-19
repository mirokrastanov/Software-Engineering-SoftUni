function distinctArray(inputArr) {
    let resultArr = inputArr.slice();
    let matches = [];

    for (let i = 0; i < resultArr.length; i++) {
        let current = resultArr[i];
        for (let j = 0; j < resultArr.length; j++) {
            if (i == j) {
                continue;
            }
            if (current == resultArr[j]) {
                matches.push(resultArr[j]);
                resultArr.splice(j, 1);
                j--;
                i--;
            }
            
        }
        
    }
    console.log(resultArr.join(" "));

}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);