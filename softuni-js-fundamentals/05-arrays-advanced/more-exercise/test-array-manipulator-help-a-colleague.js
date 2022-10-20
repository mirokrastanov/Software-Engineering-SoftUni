function arrayManipulator(numberArray, commandArray) {
    let output = numberArray.slice();
    for (let j = 0; j < commandArray.length; j++) {
        let command = commandArray[j].split(' ');
        if (command[0] === "add") {
            output.splice(Number(command[1]), 0, Number(command[2]));
        } else if (command[0] === "addMany") {
            let index = Number(command[1]);
            command.shift();
            command.shift();
            let num = command.map(Number);
            output.splice(index, 0, ...num)
        } else if (command[0] === "contains") {
            console.log(output.indexOf(Number(command[1])));
        } else if (command[0] === "remove") {
            output.splice(Number(command[1]), 1);
        } else if (command[0] === 'shift') {
            let rotations = Number(command[1]);
            for (let k = 0; k < rotations; k++) {
                let element = output.shift();
                output.push(element);
            }
        } else if (command[0] === 'sumPairs') {
            let tempArr = output.slice()
            output = [];
            if (tempArr.length % 2 != 0) {
                tempArr.push(0);
            }
            while (tempArr.length > 0) {
                output.push(tempArr.shift() + tempArr.shift());
            }
        } else if (command[0] === 'print') {
            console.log(`[ ${output.join(', ')} ]`);
        }
    }
}

// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);