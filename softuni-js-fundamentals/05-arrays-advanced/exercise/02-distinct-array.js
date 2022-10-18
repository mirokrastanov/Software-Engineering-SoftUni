function distinctArray(input) {
    let result = input;

    for (let i = 0; i < result.length; i++) {
        for (let j = result.length; j >= 0; j--) {
            if (i == j) {
                continue;
            }
            if (result[i] == result[j]) {
                result.splice(j, 1);
                i--;
            }    
        }
    }
    console.log(result.join(" "));

}

// distinctArray([1, 2, 3, 4]);
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);