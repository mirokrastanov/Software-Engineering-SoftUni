function movingTarget(inputArr) {
    let workingArr = inputArr.slice();
    let targets = workingArr.shift().split(" ").map(Number);
    let commands = workingArr.splice(0);
    let end = false;
    let missed = false;

    while (commands.length > 0) {
        let command = commands.shift();
        if (command == "End") {
            end = true;
            break;
        } else {
            command = command.split(" ");
            let type = command.shift();
            let index = Number(command.shift());
            let value = Number(command.shift());
            if (index < 0 || index >= targets.length) {
                if (type == "Shoot") {
                    continue;
                } else if (type == "Add") {
                    console.log("Invalid placement!");
                    continue;
                }
            }
            switch (type) {
                case "Shoot":
                    targets[index] -= value;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                    break;
                case "Add":
                    targets.splice(index, 0, value);
                    break;
                case "Strike":
                    let toRemove = [];
                    for (let i = index - value; i <= index + value; i++) {
                        if (!(i >= 0 && i < targets.length)) {
                            console.log("Strike missed!");
                            missed = true;
                            break;
                        }
                        toRemove.push(i);
                    }
                    if (!missed) {
                        for (let el of toRemove) {
                            targets[el] = "strike";
                        }
                        targets = targets.filter(a => a != "strike");
                    }
                    break;
            }
        }
        missed = false;
    }
    if (end) {
        console.log(targets.join("|"));
    }

}

movingTarget((["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]));
movingTarget((["1 2 3 4 5", "Strike 0 1", "End"]));