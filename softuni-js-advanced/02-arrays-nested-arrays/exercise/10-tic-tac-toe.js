function ticTacToe(moves) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let playerOne = true;
    for (let i = 0; i < moves.length; i++) {
        let [moveX, moveY] = moves[i].split(" ");
        if (playerOne) {
            if (!slotIsEmpty(moveX, moveY, board)) {
                console.log('This place is already taken. Please choose another!');
                continue;
            }
            board[moveX][moveY] = "X";
        } else {
            if (!slotIsEmpty(moveX, moveY, board)) {
                console.log('This place is already taken. Please choose another!');
                continue;
            }
            board[moveX][moveY] = "O";
        }
        if (boardFull(board)) {
            console.log('The game ended! Nobody wins :(');
            board.forEach(row => {
                console.log(row.join("\t"));
            });
            break;
        }
        if (hasWon(playerOne, board)) {
            let winner = playerOne ? "X" : "O";
            console.log(`Player ${winner} wins!`);
            board.forEach(row => {
                console.log(row.join("\t"));
            });
            break;
        }
        playerOne = playerOne ? false : true;
    }
    function hasWon(playerOne, arr) {
        let symbol = playerOne ? "X" : "O";
        let line = {
            1: [],
            2: [],
            3: [],
            4: [],
        };
        for (let p = 0; p < arr.length; p++) {
            line[1].push(arr[p][p]);
            line[2].push(arr[arr.length - 1 - p][p]);
            for (let s = 0; s < arr.length; s++) {
                line[3].push(arr[p][s]);
                line[4].push(arr[s][p]);
            }
            if (checkLine(symbol, line[3]) || checkLine(symbol, line[4])) {
                return true;
            } else {
                line[3] = [];
                line[4] = [];
            }
        }
        if (checkLine(symbol, line[1]) || checkLine(symbol, line[2])) {
            return true;
        } else {
            return false;
        }
        function checkLine(symbol, line) {
            return line.join("") == `${symbol}${symbol}${symbol}`;
        }
    }
    function boardFull(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                let current = arr[i][j];
                if (!current) {
                    return false;
                }
            }
        }
        return true;
    }
    function slotIsEmpty(x, y, arr) {
        return !arr[x][y] && arr[x][y] != "X" && arr[x][y] != "O";
    }
}
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);
ticTacToe([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
]);
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);