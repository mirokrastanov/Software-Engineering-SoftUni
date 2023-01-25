function diagonal(matrix) {
    matrix = matrix.map(a => a.split(" ").map(Number));
    let output = JSON.parse(JSON.stringify(matrix));
    if (!sumsAreEqual(matrix)[0]) {
        matrix.forEach(row => console.log(row.join(" ")));
    } else {
        let sum = sumsAreEqual(matrix)[1];
        mapMainDiagonal(matrix);
        for (let i = 0; i < output.length; i++) {
            for (let j = 0; j < output.length; j++) {
                output[i][j] = matrix[i][j] != "main" ? sum : output[i][j];
            }
        }
        output.forEach(e => console.log(e.join(" ")));
    }
    function mapMainDiagonal(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][i] = "main";
            matrix[matrix.length - 1 - i][i] = "main";
        }
    }
    function sumsAreEqual(matrix) {
        let sum = { 1: 0, 2: 0 };
        for (let i = 0; i < matrix.length; i++) {
            sum[1] += matrix[i][i];
            sum[2] += matrix[matrix.length - 1 - i][i];
        }
        return [sum[1] == sum[2], sum[1]];
    }
}
diagonal([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
diagonal([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);