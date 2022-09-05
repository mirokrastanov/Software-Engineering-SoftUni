function sunglasses(input) {
    let n = Number(input);
    if (n >= 3) {
        for (let row = 1; row <= n; row++) {
            let result = "";
            for (let star = 1; star <= 4 * n + n; star++) {
                if ((star <= 2 * n) || (star >= 2 * n + n + 1)) {
                    if (row == 1 || row == n) {
                        result += "*";
                    } else {
                        if (star == 1 || star == 2 * n || star == 2 * n + n + 1 || star == 4 * n + n) {
                            result += "*"
                        } else if ((star > 1 && star < 2 * n) || (star > 2 * n + n + 1 && star < 4 * n + n)) {
                            result += "/"
                        }
                    }
                } else {
                    if (row == 1 || row == n) {
                        result += " "
                    } else {
                        if (row == Math.ceil(n / 2)) {
                            result += "|"
                        } else {
                            result += " "
                        }
                    }
                }
            }
            console.log(result);
        }
    }
}

sunglasses(["5"]);
