function inventory(input) {
    let workingArr = input.slice();
    let inventory = workingArr.shift().split(", ");
    let commands = workingArr.splice(0);
    let finish = false;

    while (commands.length > 0) {
        let command = commands.shift().split(" - ");
        let type = command.shift().split(" ");
        let item = command.shift();
        if (type.length > 1) {
            type.pop();
        }
        type = type.shift();
        switch (type) {
            case "Collect":
                let toAdd = inventory.indexOf(item);
                if (toAdd == -1) {
                    inventory.push(item);
                }
                break;
            case "Drop":
                let toRemove = inventory.indexOf(item);
                if (toRemove != -1) {
                    inventory.splice(toRemove, 1);
                }
                break;
            case "Combine":
                let items = item.slice().split(":");
                let oldItem = items.shift();
                let newItem = items.shift();
                let oldIndex = inventory.indexOf(oldItem);
                if (oldIndex != -1) {
                    inventory.splice(oldIndex + 1, 0, newItem);
                }
                break;
            case "Renew":
                let toRenew = inventory.indexOf(item);
                if (toRenew != -1) {
                    inventory.splice(toRenew, 1);
                    inventory.push(item);
                }
                break;
            case "Craft!":
                finish = true;
                break;
        }
        if (finish) {
            console.log(inventory.join(", "));
            break;
        }
    }

}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);