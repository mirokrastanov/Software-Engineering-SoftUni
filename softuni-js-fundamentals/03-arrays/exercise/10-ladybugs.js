function ladybugs(arr) {
    let fieldSize = Number(arr[0]);
    let bugsInside = arr[1].split(" ");
    let allCommands = arr.splice(2);
    let field = [];

    for (let slot = 0; slot < fieldSize; slot++) {                      // BUILD FIELD
        field[slot] = 0;  // SAME AS: field.push(0);
    }
    for (let bug = 0; bug < bugsInside.length; bug++) {                 // ADD CURRENT BUGS
        let currentBug = Number(bugsInside[bug]);
        if (currentBug > field.length - 1) {
            continue;
        }
        field[currentBug] = 1;
    }
    for (let command = 0; command < allCommands.length; command++) {    // COMMANDS 
        let currentCommand = allCommands[command].split(" ");
        let currentPosition = Number(currentCommand[0]);
        let direction = currentCommand[1];
        let placesToMove = Number(currentCommand[2]);
        let nextPosition = currentPosition;
        if (placesToMove < 0) {                                         // DIRECTION ADJUSTMENT, BASED ON +/- VALUE
            direction = direction === "right" ? "left" : "right";
        }
        placesToMove = Math.abs(placesToMove);
        if (placesToMove != 0) {                                        // CHECK IF THERE IS MOVEMENT AT ALL
            if (field[currentPosition] == 0 || currentPosition < 0 || currentPosition >= field.length) {                         // IF NO BUG IS THERE - DO NOTHING
                continue;                       // CHECK IF THERE IS A BUG THERE or IF THE GIVEN BUG IS OUTSIDE of the FIELD
            }
            field[currentPosition] = 0;                             // IF THERE IS A BUG THERE - CLEAR ITS CURRENT POSITION
            let bugNotPlaced = true;
            while (bugNotPlaced) {                                      // BUG IS MOVING
                switch (direction) {
                    case "left": nextPosition -= placesToMove; break;
                    case "right": nextPosition += placesToMove; break;
                }
                if ((nextPosition >= 0 && nextPosition < field.length)) {   // IF NEXT POSITION IS INSIDE THE FIELD
                    if (field[nextPosition] == 1) {                         // IF THERE IS A BUG ON NEXT POSITION
                        continue;
                    } else {                                                // IF NEXT POS IS INSIDE AND FREE TO PLACE THE BUG
                        field[nextPosition] = 1;
                        bugNotPlaced = false;
                    }
                } else {                                                    // IF NEXT POSITION IS OUTSIDE OF THE FIELD
                    bugNotPlaced = false;
                }
            }
        }
    }
    console.log(...field);  // SAME AS: console.log(field.join(" "));

}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
// ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladybugs([5, '3', '3 left 2', '1 left -2']);
// ladybugs([6, '0 3 2', '0 right 1', '1 right 1', '2 right 1']);








    //     let field = [];
    //     if (fieldSize <= 0) {
    //         return;
    //     }
    //     for (let spot = 0; spot < fieldSize; spot++) {                  // CREATED EMPTY FIELD
    //         field[spot] = 0;
    //     }
    //     for (let  = 0;  < initialBugs.length; ++) {     // INITIAL BUG LAYOUT
    //         let initialBugSpot = Number(initialBugs[]);
    //         field[initialBugSpot] = 1;
    //     }
    //     while (command) {                                                   // COMMANDS TO MOVE
    //         let currentCommands = command.split(" ");
    //         let bugSpot = Number(currentCommands[0]);
    //         let leftOrRight = currentCommands[1];
    //         let spotsToMove = Number(currentCommands[2]);
    //         if (field[bugSpot] == 0) {                      // IF THERE IS NO BUG AT THE GIVEN STARTING INDEX
    //             command = arr[];
    //             ++;
    //             continue;
    //         }
    //         if (bugSpot >= 0 && bugSpot < field.length) {   // IF GIVEN INDEX IS INSIDE (VALID)
    //             if (spotsToMove != 0) {
    //                 field[bugSpot] = 0;                         // INDEX BEING FREED AFTER BUG FLIES OFF
    //             } else {
    //                 command = arr[];
    //                 ++;
    //                 continue;
    //             }
    //         } else {                                                                        // IF GIVEN INDEX IS OUTSIDE (INVALID)
    //             command = arr[];
    //             ++;
    //             continue;
    //         }
    //         if (spotsToMove < 0) {
    //             switch (leftOrRight) {                          // CALCULATING MOVE DIRECTION & VALUE
    //                 case 'right': leftOrRight = 'left'; spotsToMove = Math.abs(spotsToMove); break;
    //                 case 'left': leftOrRight = 'right'; spotsToMove = Math.abs(spotsToMove); break;
    //             }
    //         }
    //         switch (leftOrRight) {                          // CALCULATING MOVE DIRECTION & VALUE
    //             case 'right': bugSpot += spotsToMove; break;
    //             case 'left': bugSpot -= spotsToMove; break;
    //         }
    //         if (bugSpot >= 0 && bugSpot < field.length) {   // IF FINAL INDEX IS INSIDE (VALID)
    //             let spotTaken = false;
    //             if (bugSpot >= 0 && bugSpot < field.length) {
    //                 field[bugSpot] = 1;
    //                 command = arr[];
    //                 ++;
    //                 continue;
    //             } else {
    //                 spotTaken = true;
    //             }
    //             while (spotTaken) {
    //                 switch (leftOrRight) {                   // CALCULATING MOVE DIRECTION & VALUE
    //                     case 'right': bugSpot += spotsToMove; break;
    //                     case 'left': bugSpot -= spotsToMove; break;
    //                 }
    //                 if (field[bugSpot] != 1) {              // FINAL SPOT IS FREE
    //                     spotTaken = false;
    //                 }
    //             }
    //             if (bugSpot >= 0 && bugSpot < field.length) {
    //                 field[bugSpot] = 1;
    //             } else {
    //                 command = arr[];
    //                 ++;
    //                 continue;
    //             }
    //         } else {                                        // IF FINAL INDEX IS OUTSIDE (INVALID)
    //             command = arr[];
    //             ++;
    //             continue;
    //         }
    //         command = arr[]
    //         ++;
    //     }
    //     console.log(...field);