function triangleOfDollars(input) {
    let n = Number(input);
    for (let row = 1; row <= n; row++) {
        let result = "";
        for (let col = 1; col <= row; col++) {
            let dollar = "$ "
            result += dollar
            if (col == row) {
                console.log(result);
            }
        }
    }

}

triangleOfDollars(['5']);
