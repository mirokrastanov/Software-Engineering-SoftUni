function xmasTree(input) {
    let n = Number(input);
    for (let row = 1; row <= n + 1; row++) {
        let result = "";
        for (let empty = 1; empty <= (n + 1 - row); empty++) {
            result += " ";
        }
        for (let star = 0; star < row - 1; star++) {
            result += "*";
        }
        result += " | ";
        for (let star = 0; star < row - 1; star++) {
            result += "*";
        }
        console.log(result);
    }

}

xmasTree(['4']);
