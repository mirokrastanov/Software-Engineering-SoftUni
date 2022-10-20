function arrayModifier(inputArr) {
    let workingArr = inputArr.slice();
    let integers = workingArr.shift().split(" ").map(Number);
    let commands = workingArr.slice();
    let endProgram = false;

    while (commands.length > 0) {
        let command = commands.shift().split(" ");
        let type = command.shift();
        command = command.map(Number);
        switch (type) {
            case "swap":
                let swap1 = command.shift();
                let swap2 = command.shift();
                let swapValue1 = Number(integers.splice(swap1, 1, 0).join(""));
                let swapValue2 = Number(integers.splice(swap2, 1, 0).join(""));
                integers.splice(swap1, 1, swapValue2);
                integers.splice(swap2, 1, swapValue1);
                break;
            case "multiply":
                let toMultiply = command.shift();
                let multiplier = command.shift();
                let m1 = Number(integers.splice(multiplier, 1, 0).join(""));
                let m2 = Number(integers.splice(toMultiply, 1, 0).join(""));
                let multiplication = m1 * m2;
                integers.splice(toMultiply, 1, multiplication);
                integers.splice(multiplier, 1, m1);
                break;
            case "decrease":
                integers = integers.map(a => a = a - 1);
                break;
            case "end": endProgram = true; break;
            default: break;
        }
        if (endProgram) {
            break;
        }
    }
    console.log(integers.join(", "));

}

arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0',
    'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);
arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end']);