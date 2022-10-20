function arrayManipulator(integers, commands) {
    let outputArr = integers.slice();

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(" ");
        let type = command[0];
        switch (type) {
            case "add":
                let addAt = Number(command[1]);
                let toAdd = Number(command[2]);
                outputArr.splice(addAt, 0, toAdd);
                break;
            case "addMany":
                let currentIndex = Number(command[1]);
                command.shift();
                command.shift();
                command = command.map(Number);
                outputArr.splice(currentIndex, 0, ...command);
                break;
            case "contains":
                let checkIndex = Number(command[1]);
                console.log(outputArr.indexOf(checkIndex));
                break;
            case "remove":
                let removeAt = Number(command[1]);
                outputArr.splice(removeAt, 1);
                break;
            case "shift":
                let rotations = Number(command[1]);
                for (let k = 0; k < rotations; k++) {
                    let element = outputArr.shift();
                    outputArr.push(element);
                }
                break;
            case "sumPairs":
                let tempArr = outputArr.slice();
                outputArr = [];
                if (tempArr.length % 2 != 0) {
                    tempArr.push(0);
                }
                while (tempArr.length > 0) {
                    outputArr.push((tempArr.shift() + tempArr.shift()));
                }
                break;
            case "print":
                console.log(`[ ${outputArr.join(", ")} ]`);
                break;
            default: break;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);