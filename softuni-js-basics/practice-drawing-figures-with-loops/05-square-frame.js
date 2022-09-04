function squareFrame(input) {
    let n = Number(input);
    for (let row = 1; row <= n; row++) {
        let result = "";
        if (row == 1 || row == n) {
            result += "+ "
        } else if (row != 1 && row != n) {
            result += "| "
        }

        for (let col = 1; col <= n - 2; col++) {
            result += "- "
        }
        if (row == 1 || row == n) {
            result += "+ "
        } else if (row != 1 && row != n) {
            result += "| "
        }

        console.log(result);
    }

}

squareFrame(["6"]);
