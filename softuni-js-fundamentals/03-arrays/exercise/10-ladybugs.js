function ladybugs(arr) {
    let index = 0;
    let fieldSize = arr[index];
    index++;
    let bugsIndicesArray = arr[index].split(" ");
    index++;
    let command = arr[index]
    index++;

    let currentFieldArray = [];
    for (let block = 1; block <= fieldSize; block++) {                  // CREATED EMPTY FIELD
        currentFieldArray[block - 1] = 0;
    }

    for (let index = 0; index < bugsIndicesArray.length; index++) {     // INITIAL BUG LAYOUT
        let currentBugIndex = Number(bugsIndicesArray[index]);
        currentFieldArray[currentBugIndex] = 1;
    }
    // console.log(currentFieldArray);

    let directionLeft = false;
    while (command) {                                                   // COMMANDS TO MOVE
        let commandArray = command.split(" ");
        let ladybugFromIndex = Number(commandArray[0]);
        let moveInDirection = commandArray[1];
        let moveWithThisManyIndices = Number(commandArray[2]);
        let ladybugCurrentIndex = ladybugFromIndex;

        if (currentFieldArray[ladybugFromIndex] == 0) {                 // IN THERE IS NO BUG AT THE GIVEN STARTING INDEX
            command = arr[index]
            index++;
            continue;
        }

        if (ladybugCurrentIndex >= 0 && ladybugCurrentIndex < currentFieldArray.length) { // IF GIVEN INDEX IS INSIDE (VALID)
            currentFieldArray[ladybugFromIndex] = 0;                        // INDEX BEING FREED AFTER BUG FLIES OFF
        } else {                                                                        // IF GIVEN INDEX IS OUTSIDE (INVALID)
            command = arr[index]
            index++;
            continue;
        }

        switch (moveInDirection) {                                      // CALCULATING MOVE DIRECTION & VALUE
            case 'right': ladybugCurrentIndex += moveWithThisManyIndices; directionLeft = false; break;
            case 'left': ladybugCurrentIndex -= moveWithThisManyIndices; directionLeft = true; break;
            default: break;
        }
        // THE SELECTED BUG MOVES following the given COMMAND
        if (ladybugCurrentIndex >= 0 && ladybugCurrentIndex < currentFieldArray.length) { // IF SPOT IS INSIDE THE FIELD
            while (currentFieldArray[ladybugCurrentIndex] == 1) {                                  // IF SPOT IS TAKEN
                if (directionLeft) {
                    ladybugCurrentIndex--;
                } else {
                    ladybugCurrentIndex++;
                }
            }                                                                            // IF SPOT IS FREE
            if (ladybugCurrentIndex >= 0 && ladybugCurrentIndex < currentFieldArray.length) {
                currentFieldArray[ladybugCurrentIndex] = 1;
            }
        }                                       // IF THE FINAL LANDING SPOT IS OUTSIDE THE FIELD - NOTHING ELSE CHANGES
        command = arr[index]
        index++;
    }
    console.log(...currentFieldArray);

}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
// ladybugs([5, '3', '3 left 2', '1 left -2']);
// ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([6, '0 3 2', '0 right 1', '1 right 1', '2 right 1']);
