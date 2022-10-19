function arrayManipulations(inputArr) {
    let workingArr = inputArr[0].split(" ");

    function removeElement(numberToRemove, workingArr) {
        let outputArray = workingArr.filter(i => i != numberToRemove);
        return outputArray;
    }

    for (let i = 1; i < inputArr.length; i++) {
        let command = inputArr[i].split(" ");
        let type = command[0];
        switch (type) {
            case "Add": workingArr.push(command[1]); break;
            case "Remove": workingArr = removeElement(command[1], workingArr); break;
            case "RemoveAt": workingArr.splice(command[1], 1); break;
            case "Insert": workingArr.splice(command[2], 0, (command[1])); break;
            default: break;
        }
        workingArr.map(Number);
    }
    console.log(workingArr.join(" "));

}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);