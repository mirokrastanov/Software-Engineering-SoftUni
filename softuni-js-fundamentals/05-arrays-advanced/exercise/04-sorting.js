function sorting(inputArr) {
    let ascending = inputArr.slice().sort((a, b) => a - b);
    let descending = inputArr.slice().sort((a, b) => b - a);
    let final = [];

    for (let i = 0; i < inputArr.length; i ++) {
        if (i % 2 == 0) {
            let current = descending.shift();
            final.push(current);
        } else {
            let current = ascending.shift();
            final.push(current);
        }       
    }
    console.log(final.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);