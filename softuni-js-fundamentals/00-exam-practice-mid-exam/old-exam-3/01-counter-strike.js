function counterStrike(inputArr) {
    let workingArr = inputArr.slice();
    let energy = Number(workingArr.shift());
    let commands = workingArr.splice(0);
    let finish = false;
    let wins = 0;

    while (commands.length > 0) {
        let command = commands.shift();
        if (command == "End of battle") {
            finish = true;
            break;
        } else {
            let distance = Number(command);
            if (energy - distance >= 0) {
                wins++;
                energy -= distance;
                if (wins % 3 == 0) {
                    energy += wins;
                }
            } else {
                console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
                break;
            }
        }
    }
    if (finish) {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
    }

}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);