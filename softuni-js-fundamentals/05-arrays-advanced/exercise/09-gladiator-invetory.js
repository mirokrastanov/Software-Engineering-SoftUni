function gladiatorInventory(inputArr) {
    let workingArr = inputArr.slice();
    let equipment = workingArr.shift().split(" ");
    let commands = workingArr.slice();

    while (commands.length > 0) {
        let command = commands.shift().split(" ");
        let type = command.shift();
        switch (type) {
            case "Buy":
                let toBuy = command.shift();
                let boughtAlready = false;
                for (let i = 0; i < equipment.length; i++) {
                    if (equipment[i] == toBuy) {
                        boughtAlready = true;
                    }
                }
                if (!boughtAlready) {
                    equipment.push(toBuy);
                }
                break;
            case "Trash":
                let toTrash = command.shift();
                let tempArr = [];
                for (let i = 0; i < equipment.length; i++) {
                    if (equipment[i] == toTrash) {
                        continue;
                    }
                    if (!(tempArr.includes(equipment[i]))) {
                        tempArr.push(equipment[i]);
                    }
                }
                equipment = tempArr;
                break;
            case "Repair":
                let toRepair = command.shift();
                if (equipment.includes(toRepair)) {
                    let repairIndex = equipment.indexOf(toRepair);
                    equipment.splice(repairIndex, 1);
                    equipment.push(toRepair);
                }
                break;
            case "Upgrade":
                let upgradeArr = command.join("").split("-");
                let toUpgrade = upgradeArr.shift();
                let upgradeLevel = upgradeArr.shift();
                if (equipment.includes(toUpgrade)) {
                    let upgradeIndex = equipment.indexOf(toUpgrade);
                    let upgradedVersion = `${toUpgrade}:${upgradeLevel}`;
                    equipment.splice((upgradeIndex + 1), 0, upgradedVersion);
                }
                break;
            default: break;
        }
    }
    console.log(equipment.join(" "));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);