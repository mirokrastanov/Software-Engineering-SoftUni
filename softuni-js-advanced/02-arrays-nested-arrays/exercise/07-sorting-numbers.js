function sortingNumbers(input) {
    let output = [];
    let sorted = input.sort((a, b) => a - b);
    for (let i = 0; i < input.length / 2; i++) {
        output.push(input[i]);
        if (output.length == input.length) {
            break;
        }
        output.push(input[input.length - 1 - i]);
    }
    // console.log(output);
    return output;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);