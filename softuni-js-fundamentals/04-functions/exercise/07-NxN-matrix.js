function matrixNxN(inputInteger) {
    let buildARow = function (inputValue) {
        let row = '';
        for (let i = 1; i <= inputValue; i++) {
            if (i != inputValue) {
                row += `${inputValue} `;
            } else {
                row += `${inputValue}`;
            }
        }
        return row;
    };
    let buildAColumn = function (inputValue) {
        for (let i = 1; i <= inputValue; i++) {
            let column = buildARow(inputInteger);
            console.log(column);
        }
    };

    buildAColumn(inputInteger);

}

matrixNxN(3);
// matrixNxN(7);
// matrixNxN(2);