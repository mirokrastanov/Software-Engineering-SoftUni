function orbit([width, height, col, row]) {
    let board = [];
    let line = [];
    let magicNum = 1;
    for (let i = 0; i < width; i++) {
        line.push(0);
    }
    for (let i = 0; i < height; i++) {
        board.push([...line]);
    }
    board[row][col] = magicNum;
    let step = magicNum;
    magicNum++;

    while (magicNum <= board.length) {
        for (let y = 0; y < board.length; y++) {
            // for (let x = 0; x < board[0].length; x++) {
            //     if ((x == row - step && y == col + step) || (x == row && y == col + step) || (x == row + step && y == col + step) ||
            //         (x == row - step && y == col) || (x == row + step && y == col) ||
            //         (x == row - step && y == col - step) || (x == row && y == col - step) || (x == row + step && y == col - step)) {
            //         board[x][y] = magicNum;
            //     }
            // }
            for (let k = 0; k < board.length; k++) {
                if (row - step >= 0) {
                    board[row - step][k] = magicNum;
                }
                if (row + step <= board[0].length - 1) {
                    board[row + step][k] = magicNum;
                }
                if (col + step <= board.length - 1) {
                    board[k][col + step] = magicNum;
                }
                if (col - step >= 0) {
                    board[k][col - step] = magicNum;
                }
            }
        }
        magicNum++
        step++;
    }


    board.forEach(line => console.log(...line))
    // console.log(board);
}
// orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
// orbit([3, 3, 2, 2]);

// x-1 y+1 | x y+1 | x+1 y+1
// x-1 y   | x y   | x+1 y
// x-1 y-1 | x y-1 | x+1 y-1

// 00 01 02 03 04
// 14 24 34 44
// 43 42 41 40
// 30 20 10