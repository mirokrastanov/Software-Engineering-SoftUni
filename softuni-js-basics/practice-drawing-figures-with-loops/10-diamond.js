function diamond(input) {
    let n = Number(input);
    if (n >= 1) {
        let topUndLimit = Math.ceil((n - 2) / 2);

        for (let row = 1; row <= Math.floor((n + 1) / 2); row++) {   //rows
            let result = "";
            if (n == 2) {
                result += "**";
            } else if (n == 1) {
                result += "*";
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
                    result += "*";
                    for (let und = 1; und <= n - 2 - 2 * topUndLimit; und++) {
                        result += "-";
                    }
                    result += "*";
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
                    result += "*";
                    for (let und = 1; und <= n - 2 - 2 * topUndLimit; und++) {
                        result += "-";
                    }
                    result += "*";
                    for (let und = 1; und <= topUndLimit; und++) {
                        result += "-";
                    }
                }
            }
            topUndLimit -= 1;
            console.log(result);
        }
        // 2nd for for base (IN PROGRESS...)
        if (n != 1 && n != 2) {
            topUndLimit = Math.ceil((n - 2) / 2);
            for (let row = 1; row <= n - 1 - Math.floor((n + 1) / 2); row++) {   //rows
                let result = "";
                if (n % 2 == 0) {                                 // even rows
                    if (row == n - 1 - Math.floor((n + 1) / 2)) {
                        for (let und = 1; und <= topUndLimit - (row * (-1)); und++) {
                            result += "-";
                        }
                        result += "**";
                        for (let und = 1; und <= topUndLimit - (row * (-1)); und++) {
                            result += "-";
                        }
                    } else {
                        for (let und = 1; und <= topUndLimit; und++) {
                            result += "-";
                        }
                        result += "*";
                        for (let und = 1; und <= 2 * (n - 2 * topUndLimit); und++) {
                            result += "-";
                        }
                        result += "*";
                        for (let und = 1; und <= topUndLimit; und++) {
                            result += "-";
                        }
                    }
                } else if (n % 2 != 0) {                                  // odd rows
                    if (n - Math.floor((n + 1) / 2)) {
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
                        result += "*";
                        for (let und = 1; und <= n - 2 - 2 * topUndLimit; und++) {
                            result += "-";
                        }
                        result += "*";
                        for (let und = 1; und <= topUndLimit; und++) {
                            result += "-";
                        }
                    }
                }
                topUndLimit += 1;
                console.log(result);
            }
        }

    }
}

diamond(["8"]);
