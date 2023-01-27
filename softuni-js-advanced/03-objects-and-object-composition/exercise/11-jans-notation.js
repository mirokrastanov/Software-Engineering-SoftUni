function notation(input) {
    let formulas = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        // '%': (a, b) => a % b,
        // '**': (a, b) => a ** b,
    };
    let numbers = [];
    let error = false;
    while (input.length > 0) {
        let current = input.shift();
        if (current == Number(current)) {
            numbers.push(current);
            continue;
        }
        if (numbers.length < 2) {
            console.log('Error: not enough operands!');
            error = true;
            break;
        } else {
            let b = numbers.pop();
            let a = numbers.pop();
            let result = [a, b].reduce(formulas[current]);
            numbers.push(result);
        }
    }
    if (numbers.length == 1 && !error) {
        console.log(numbers[0]);
    } else if (numbers.length > 1) {
        console.log('Error: too many operands!');
    }
}

// notation([3, 4, '+']);
// notation([5, 3, 4, '*', '-']);
// notation([31, 2, '+', 11, '/']);
notation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);
// notation([7, 33, 8, '-']);
// notation([15, '/']);