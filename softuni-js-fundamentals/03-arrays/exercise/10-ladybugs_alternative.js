function ladybugsAlternative(arr) {

    let sizeOfField = arr[0];
    let initialIndices = arr[1];
    initialIndices = initialIndices.split(" ");
    let commands = arr.slice(2);
    let field = [];

    for (let i = 0; i < sizeOfField; i++) {
        field.push(0);
    }
    for (let i = 0; i < initialIndices.length; i++) {
        let position = Number(initialIndices[i]);
        if (position > field.length - 1) {
            continue;
        }
        field[position] = 1;
    }
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];
        currentCommand = currentCommand.split(" ");
        let position = Number(currentCommand[0]);
        let direction = currentCommand[1];
        let flyCount = Number(currentCommand[2]);
        if (field[position] === 0
            || position < 0
            || position > field.length - 1) {
            continue;
        }
        field[position] = 0;
        if (flyCount < 0) {
            direction = direction === "right" ? "left" : "right";
            flyCount = Math.abs(flyCount);
        }
        let nextPosition = 0;
        if (direction === "right") {
            nextPosition = position + flyCount;
        } else if (direction === "left") {
            nextPosition = position - flyCount;
        }
        while (field[nextPosition] === 1) {
            if (direction === "right") {
                nextPosition += flyCount;
            } else if (direction === "left") {
                nextPosition -= flyCount;
            }
        }
        if (nextPosition > field.length - 1 || nextPosition < 0) {
            continue;
        }
        field[nextPosition] = 1;
    }
    console.log(field.join(" ")); //...field

}

ladybugsAlternative([3, '0 1', '0 right 1', '2 right 1']);
// ladybugsAlternative([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladybugsAlternative([5, '3', '3 left 2', '1 left -2']);
// ladybugsAlternative([6, '0 3 2', '0 right 1', '1 right 1', '2 right 1']);