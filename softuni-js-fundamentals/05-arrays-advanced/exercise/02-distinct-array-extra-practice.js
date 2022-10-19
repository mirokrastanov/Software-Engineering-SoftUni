function distinctArray(inputArr) {
    let result = inputArr.slice();
    let matches = [];

    for (let i = 0; i < result.length; i++) {
        let current = result[i];
        let nextMatch = result.indexOf(current, i + 1);
        if (nextMatch != -1) {
            matches.push(result[nextMatch]);
            result.splice(nextMatch, 1);
            i--;
        }
    }

    console.log(result.join(" "));

}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);