function ladybugs(arr) {
    let index = 0;
    let fieldSize = arr[index];
    index++;
    let initialBugs = arr[index].split(" ");
    index++;
    let command = arr[index];
    index++;
    let field = [];
    if (fieldSize <= 0) {
        return;
    }
    for (let spot = 0; spot < fieldSize; spot++) {                  // CREATED EMPTY FIELD
        field[spot] = 0;
    }
    for (let index = 0; index < initialBugs.length; index++) {     // INITIAL BUG LAYOUT
        let initialBugSpot = Number(initialBugs[index]);
        field[initialBugSpot] = 1;
    }
    while (command) {                                                   // COMMANDS TO MOVE
        let currentCommands = command.split(" ");
        let bugSpot = Number(currentCommands[0]);
        let leftOrRight = currentCommands[1];
        let spotsToMove = Number(currentCommands[2]);
        if (field[bugSpot] == 0) {                      // IN THERE IS NO BUG AT THE GIVEN STARTING INDEX
            command = arr[index];
            index++;
            continue;
        }
        if (bugSpot >= 0 && bugSpot < field.length) {   // IF GIVEN INDEX IS INSIDE (VALID)
            if (spotsToMove != 0) {
                field[bugSpot] = 0;                         // INDEX BEING FREED AFTER BUG FLIES OFF
            } else {
                command = arr[index];
                index++;
                continue;
            }
        } else {                                                                        // IF GIVEN INDEX IS OUTSIDE (INVALID)
            command = arr[index];
            index++;
            continue;
        }
        switch (leftOrRight) {                          // CALCULATING MOVE DIRECTION & VALUE
            case 'right': bugSpot += spotsToMove; break;
            case 'left': bugSpot -= spotsToMove; break;
        }
        if (bugSpot >= 0 && bugSpot < field.length) {   // IF FINAL INDEX IS INSIDE (VALID)
            let spotTaken = false;
            if (bugSpot >= 0 && bugSpot < field.length) {
                field[bugSpot] = 1;
                command = arr[index];
                index++;
                continue;
            } else {
                spotTaken = true;
            }
            while (spotTaken) {
                switch (leftOrRight) {                   // CALCULATING MOVE DIRECTION & VALUE
                    case 'right': bugSpot++; break;
                    case 'left': bugSpot--; break;
                }
                if (field[bugSpot] != 1) {              // FINAL SPOT IS FREE
                    spotTaken = false;
                }
            }
            if (bugSpot >= 0 && bugSpot < field.length) {
                field[bugSpot] = 1;
            } else {
                command = arr[index];
                index++;
                continue;
            }
        } else {                                        // IF FINAL INDEX IS OUTSIDE (INVALID)
            command = arr[index];
            index++;
            continue;
        }
        command = arr[index]
        index++;
    }
    console.log(...field);

}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);
// ladybugs([6, '0 3 2', '0 right 1', '1 right 1', '2 right 1']);
