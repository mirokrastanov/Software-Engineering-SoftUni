function manOWar(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let maxSectionHP = Number(input.shift());
    let commands = input.splice(0);
    let sinkWarship = false;
    let sinkPirateShip = false;

    while (commands.length > 0) {
        let command = commands.shift();
        if (command != "Retire") {
            let [type, v1, v2, v3] = command.split(" ");
            switch (type) {
                case "Fire":
                    let fireIndex = Number(v1);
                    let fireDMG = Number(v2);
                    if (fireIndex >= 0 && fireIndex < warship.length) {
                        warship[fireIndex] -= fireDMG;
                        if (warship[fireIndex] <= 0) {
                            sinkWarship = true;
                            console.log("You won! The enemy ship has sunken.");
                        }
                    }
                    break;
                case "Defend":
                    let defStartIndex = Number(v1);
                    let defEndIndex = Number(v2);
                    let defDMG = Number(v3);
                    if (defEndIndex >= 0 && defEndIndex < pirateShip.length && defStartIndex >= 0 && defStartIndex < pirateShip.length) {
                        for (let section = defStartIndex; section <= defEndIndex; section++) {
                            pirateShip[section] -= defDMG;
                            if (pirateShip[section] <= 0) {
                                sinkPirateShip = true;
                                console.log("You lost! The pirate ship has sunken.");
                                break;
                            }
                        }
                    }
                    break;
                case "Repair":
                    let repairIndex = Number(v1);
                    let restoreHP = Number(v2);
                    if (repairIndex >= 0 && repairIndex < pirateShip.length) {
                        pirateShip[repairIndex] += restoreHP;
                        if (pirateShip[repairIndex] > maxSectionHP) {
                            pirateShip[repairIndex] = maxSectionHP;
                        }
                    }
                    break;
                case "Status":
                    let needRepairCounter = 0;
                    for (let section = 0; section < pirateShip.length; section++) {
                        if (pirateShip[section] < maxSectionHP * 0.2) {
                            needRepairCounter++;
                        }
                    }
                    console.log(`${needRepairCounter} sections need repair.`);
                    break;
            }
            if (sinkWarship || sinkPirateShip) {
                break;
            }
        }
    }
    if (!sinkWarship && !sinkPirateShip) {
        console.log(`Pirate ship status: ${(pirateShip.reduce((a, b) => a + b))}`);
        console.log(`Warship status: ${(warship.reduce((a, b) => a + b))}`);
    }
}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);