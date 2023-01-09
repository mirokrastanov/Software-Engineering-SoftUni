function treasureHunt(input) {
    let chest = input.shift().split("|");
    let commands = input.splice(0);

    while (commands.length > 0) {
        let command = commands.shift();
        if (command == "Yohoho!") {
            break;
        } else {
            command = command.split(" ");
            let type = command.shift();
            switch (type) {
                case "Loot":
                    for (let item of command) {
                        if (!chest.includes(item)) {
                            chest.unshift(item);
                        }
                    }
                    break;
                case "Drop":
                    let index = Number(command.shift());
                    if (index >= 0 && index < chest.length) {
                        let toMove = chest.splice(index, 1);
                        chest.push(toMove.shift());
                    }
                    break;
                case "Steal":
                    let count = Number(command.shift());
                    let stolen = "";
                    if (chest.length <= count) {
                        stolen = chest.splice(0);
                        console.log(stolen.join(", "));
                    } else {
                        stolen = chest.reverse().splice(0, count);
                        console.log(stolen.reverse().join(", "));
                        chest.reverse();
                    }
                    break;
            }
        }
    }
    let avgGain = 0;
    if (chest.length > 0) {
        avgGain += chest.slice().join("").length / chest.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}

// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);