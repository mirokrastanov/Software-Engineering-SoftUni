function matrixNxN(inputInteger) {
    let buildARow = () => {
        let row = '';
        for (let i = 1; i <= inputInteger; i++) {
            if (i != inputInteger) {
                row += `${inputInteger} `;
            } else {
                row += `${inputInteger}`;
            }
        }
        return row;
    };
    let buildAColumn = () => {
        for (let i = 1; i <= inputInteger; i++) {
            let column = buildARow(inputInteger);
            console.log(column);
        }
    };

    buildAColumn(inputInteger);

}

matrixNxN(3);
// matrixNxN(7);
// matrixNxN(2);