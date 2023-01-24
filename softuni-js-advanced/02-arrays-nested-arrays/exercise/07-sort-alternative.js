function sortingNumbers(input) {
    let output = [];
    input = input.sort((a, b) => a - b);

    while (input.length != 0) {
        output.push(input.shift());
        output.push(input.pop());
    }

    // console.log(output);
    return output;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);