function triangleOfNumbers(input) {
    for (let row = 1; row <= input; row++) {
        let buffer = "";
        for (let col = 1; col <= row; col++) {
            buffer += `${row} `;
        }
        console.log(buffer);
    }

}

triangleOfNumbers(6);