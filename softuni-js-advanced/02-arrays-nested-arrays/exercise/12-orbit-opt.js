function orbit([width, height, col, row]) {
    if (width == 0 || height == 0) {
        return;
    }

    let board = [];
    let line = '0'.repeat(width).split("").map(Number);
    let magicNum = 1;
    for (let i = 0; i < height; i++) {
        board.push([...line]);
    }
    board[row][col] = magicNum;
    let step = magicNum++;
    while (magicNum <= board.length) {
        for (let y = 0; y < board.length; y++) {
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
}
// orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2]);
orbit([5, 5, 1, 2]);
// orbit([3, 3, 2, 2]);
// orbit([0, 0, 0, 0]);
// orbit([1, 1, 1, 1]);
// orbit([10, 10, 10, 10]);

