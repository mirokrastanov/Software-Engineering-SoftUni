function returnNthElement(input, step) {
    let output = [];
    for (let i = 0; i < input.length; i+=step) {
        output.push(input[i]);
    }

    return output;

}

returnNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2);