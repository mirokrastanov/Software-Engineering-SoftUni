function house(input) {
    let n = Number(input);
    if (n >= 2) {
        let topUndLimit = Math.ceil((n - 2) / 2);

        for (let row = 1; row <= Math.floor((n + 1) / 2); row++) {   //rows
            let result = "";
            if (n == 2) {
                result += "**";
            } else if (n % 2 == 0) {                                 // even rows
                if (row == 1) {
                    for (let und = 1; und <= topUndLimit; und++) {
                        result += "-";
                    }
                    result += "**";
                    for (let und = 1; und <= topUndLimit; und++) {
                        result += "-";
                    }
                } else {
                    for (let und = 1; und <= topUndLimit; und++) {
                        result += "-";
                    }
                    for (let star = 1; star <= (row * 2); star++) {
                        result += "*";
                    }
                    for (let und = 1; und <= topUndLimit; und++) {
                        result += "-";
                    }
                }
            } else if (n % 2 != 0) {                                  // odd rows
                if (row == 1) {
                    for (let und = 1; und <= topUndLimit; und++) {
                        result += "-";
                    }
                    result += "*";
                    for (let und = 1; und <= topUndLimit; und++) {
                        result += "-";
                    }
                } else {
                    for (let und = 1; und <= topUndLimit; und++) {
                        result += "-";
                    }
                    for (let star = 1; star <= (row * 2 - 1); star++) {
                        result += "*";
                    }
                    for (let und = 1; und <= topUndLimit; und++) {
                        result += "-";
                    }
                }
            }
            topUndLimit -= 1;
            console.log(result);
        }
        // 2nd for for base
        for (let row = 1; row <= n - (Math.floor((n + 1) / 2)); row++) {     // rows
            let result = "";
            if (n == 2) {
                result += "||";
            } else {
                result += "|";
                for (let star = 1; star <= n - 2; star++) {
                    result += "*";
                }
                result += "|";
            }
            console.log(result);
        }
    }
}

house(["6"]);
