function magicMatrices(input) {
    let sum = { 'row': 0, 'col': 0 };

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            sum['row'] += input[i][j];
            sum['col'] += input[i][0];
        }
    }
    console.log(sum['row'] == sum['col']);
    // console.log(sum);
}


magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);