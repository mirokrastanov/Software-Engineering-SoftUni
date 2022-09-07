function diamond(input) {
    let n = Number(input);
    if (n >= 1) {
        if (n == 1) {
            console.log("*");
        } else if (n == 2) {
            console.log("**");
        } else if (n % 2 != 0) {                                     // odd numbers
            let rowLimit = n;
            let upperLimit = Math.ceil(rowLimit / 2);
            let lowerLimit = rowLimit - upperLimit;
            let side = (n - 1) / 2;
            for (let row = 1; row <= upperLimit; row++) {            // upper part
                result = "";
                if (row == 1) {                                      // row 1
                    for (let dash = 1; dash <= side; dash++) {
                        result += "-";
                    }
                    result += "*";
                    for (let dash = 1; dash <= side; dash++) {
                        result += "-";
                    }
                } else {                                              // other rows
                    for (let dash = 1; dash <= side; dash++) {        // left side dash
                        result += "-"
                    }
                    result += "*";
                    for (let dash = 1; dash <= n - 2 - 2 * side; dash++) { // middle dash
                        result += "-";
                    }
                    result += "*";
                    for (let dash = 1; dash <= side; dash++) {         // right side dash
                        result += "-"
                    }
                }
                side--;
                console.log(result);
            }
            side = 1;
            for (let row = 1; row <= lowerLimit; row++) {               // lower part
                result = "";
                if (row == lowerLimit) {                                // last row
                    for (let dash = 1; dash <= side; dash++) {
                        result += "-";
                    }
                    result += "*";
                    for (let dash = 1; dash <= side; dash++) {
                        result += "-";
                    }
                } else {                                                // other rows
                    for (let dash = 1; dash <= side; dash++) {        // left side dash
                        result += "-"
                    }
                    result += "*";
                    for (let dash = 1; dash <= n - 2 - 2 * side; dash++) { // middle dash
                        result += "-";
                    }
                    result += "*";
                    for (let dash = 1; dash <= side; dash++) {         // right side dash
                        result += "-"
                    }
                }
                side++;
                console.log(result);
            }
        } else if (n % 2 == 0) {                        // even numbers
            let rowLimit = n - 1;
            let upperLimit = Math.ceil(rowLimit / 2);
            let lowerLimit = rowLimit - upperLimit;
            let side = (n - 2) / 2;
            for (let row = 1; row <= upperLimit; row++) {            // upper part
                result = "";
                if (row == 1) {                                      // row 1
                    for (let dash = 1; dash <= side; dash++) {
                        result += "-";
                    }
                    result += "**";
                    for (let dash = 1; dash <= side; dash++) {
                        result += "-";
                    }
                } else {                                              // other rows
                    for (let dash = 1; dash <= side; dash++) {        // left side dash
                        result += "-"
                    }
                    result += "*";
                    for (let dash = 1; dash <= n - 2 - 2 * side; dash++) { // middle dash
                        result += "-";
                    }
                    result += "*";
                    for (let dash = 1; dash <= side; dash++) {         // right side dash
                        result += "-"
                    }
                }
                side--;
                console.log(result);
            }
            side = 1;
            for (let row = 1; row <= lowerLimit; row++) {               // lower part
                result = "";
                if (row == lowerLimit) {                                // last row
                    for (let dash = 1; dash <= side; dash++) {
                        result += "-";
                    }
                    result += "**";
                    for (let dash = 1; dash <= side; dash++) {
                        result += "-";
                    }
                } else {                                                // other rows
                    for (let dash = 1; dash <= side; dash++) {        // left side dash
                        result += "-"
                    }
                    result += "*";
                    for (let dash = 1; dash <= n - 2 - 2 * side; dash++) { // middle dash
                        result += "-";
                    }
                    result += "*";
                    for (let dash = 1; dash <= side; dash++) {         // right side dash
                        result += "-"
                    }
                }
                side++;
                console.log(result);
            }
        }
    }
}

diamond(["9"]);
