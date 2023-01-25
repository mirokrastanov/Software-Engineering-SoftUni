function orbit(arr) {
    let [width, height, starRow, starCol] = arr;
    let matrix = [];

    for (let i = 0; i < height; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1; debugger;
            
            // Math.abs(row - starRow)
            // diff between the current ROW inside the outer LOOP and the ROW where the STAR is
            
            // Math.abs(col - starCol)
            // diff between the current COLUMN inside the inner LOOP and the COLUMN where the STAR is
            
            // at the end the value to be imported EQUAL the highest of the 2 differences above + 1 (1 is the initial number)

            // example: start is on row 2 in column 1, the value on row 4 column 4 would be:
            // (starROW(2) - loopROW(4)) = 2 (the row diff)
            // (starCOL(1) - loopCOL(4)) = 3 (the col diff)
            // taking the Math.max of the 2 ==> 3
            // lastly ADDing + 1 (the starCELL's value = initial value)
            // result 3 + 1 = 4 ==> hence on row 4 in column 4 the value should be 4
            // that is INDEX 4 for all the values above, as the number is related to the loop and the loop starts from 0, hence
            // taking the index, not the actual row/col numbers
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