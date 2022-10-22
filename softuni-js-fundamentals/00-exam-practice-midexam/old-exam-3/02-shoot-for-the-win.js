function shootForTheWin(inputArr) {
    let hits = 0;
    let workingArr = inputArr.slice();
    let targets = workingArr.shift().split(" ").map(Number);
    let commands = workingArr.splice(0);
    let end = false;

    while (commands.length > 0) {
        let command = commands.shift();
        if (command == "End") {
            end = true;
            break;
        } else {
            let index = Number(command);
            let value = targets[index];
            if (index >= 0 && index < targets.length) {
                if (targets[index] == -1) {
                    continue;
                }
                targets[index] = -1;
                hits++;
                for (let i = 0; i < targets.length; i++) {
                    if (i == index) {
                        continue;
                    } else if (targets[i] == - 1) {
                        continue;
                    } else if (targets[i] > value) {
                        targets[i] -= value;
                    } else if (targets[i] <= value) {
                        targets[i] += value;
                    }
                }

            }
        }
    }
    if (end) {
        console.log(`Shot targets: ${hits} -> ${targets.join(" ")}`);
    }

}

shootForTheWin((["24 50 36 70", "0", "4", "3", "1", "End"]));
shootForTheWin((["30 30 12 60 54 66", "5", "2", "4", "0", "End"]));