function orbit(arr) {
    let [width, height, starRow, starCol] = arr;
    let matrix = [];

    for (let i = 0; i < height; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1; debugger;
            console.log(matrix[row]);
        }
    }
    console.log(matrix.map(line => line.join(" ")).join("\n"));
}

// orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2]);
orbit([5, 5, 1, 2]);
// orbit([3, 3, 2, 2]);
// orbit([0, 0, 0, 0]);
// orbit([1, 1, 1, 1]);
// orbit([10, 10, 10, 10]);