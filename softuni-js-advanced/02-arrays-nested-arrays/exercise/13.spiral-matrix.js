function spiralMatrix(width, height) {
    let board = [];
    let line = [];
    let num = 1;
    for (let i = 0; i < width; i++) {
        line.push(0);
    }
    for (let i = 0; i < height; i++) {
        board.push([...line]);
    }
    let left = 0;
    let top = 0;
    let right = width - 1;
    let bottom = height - 1;
    while (left <= right && top <= bottom) {
        // top row
        for (let i = left; i <= right; i++) {
            board[top][i] = num++;
        }
        top++;
        // right col
        for (let i = top; i <= bottom; i++) {
            board[i][right] = num++;
        }
        right--;
        // bottom row
        for (let i = right; i >= left; i--) {
            board[bottom][i] = num++;
        }
        bottom--;
        // left col
        for (let i = bottom; i >= top; i--) {
            board[i][left] = num++;
        }
        left++;
    }
    board.forEach(line => console.log(...line))
    // console.log(board);
}
spiralMatrix(3, 3);
spiralMatrix(5, 5);