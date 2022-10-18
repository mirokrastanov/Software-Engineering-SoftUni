function sorting(input) {

    let ascending = input.slice().sort((a, b) => a - b);
    let descending = input.slice().sort((a, b) => b - a);
    let result = [];

    for (let i = 0; i < input.length / 2; i++) {
        result.push(descending[i]);
        if (input.length % 2 != 0 && i == Math.floor(input.length / 2)) {
            break;
        }
        result.push(ascending[i]);
    }

    console.log(result.join(" "));


}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 33]);