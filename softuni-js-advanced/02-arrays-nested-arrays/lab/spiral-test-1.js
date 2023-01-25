function orbit([width, height, col, row]) {
    let board = [];
    let line = [];
    let magicNum = 0;
    for (let i = 0; i < width; i++) {
        line.push(0);
    }
    for (let i = 0; i < height; i++) {
        board.push([...line]);
    }
    // board[row][col] = ++magicNum;

    let left = 0;
    let top = 0;
    let right = board[0].length - 1;
    let bottom = board.length - 1;

    while (left <= right && top <= bottom) {
        // top row
        for (let i = left; i <= right; i++) {
            board[top][i] = magicNum++;            
        }
        top++;
        // right col
        for (let i = top; i <= bottom; i++) {
            board[i][right] = magicNum++;            
        }
        right--;
        // bottom row
        for (let i = right; i >= left; i--) {
            board[bottom][i] = magicNum++;            
        }
        bottom--;
        // left col
        for (let i = bottom; i >= top; i--) {
            board[i][left] = magicNum++;            
        }
        left++;
    }

    board.forEach(line => console.log(...line))
    // console.log(board);
}
// orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
// orbit([3, 3, 2, 2]);

// 00 01 02 03 04
// 14 24 34 44
// 43 42 41 40
// 30 20 10


