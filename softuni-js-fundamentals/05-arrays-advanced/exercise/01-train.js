function train(inputArr) {
    let wagons = inputArr[0].split(" ");
    let capacity = Number(inputArr[1]);
    let endAdd = [];
    let haveBoarded = false;

    for (let i = 2; i < inputArr.length; i++) {
        let command = inputArr[i].split(" ");
        let type = command[0];
        switch (type) {
            case "Add":
                endAdd.push(command[1]);
                break;
            default:
                let boarding = Number(command);
                for (let i = 0; i < wagons.length; i++) {
                    let boarded = Number(wagons[i]);
                    let free = capacity - boarded;
                    if (free >= boarding) {
                        wagons[i] = boarded + boarding;
                        haveBoarded = true;
                    }
                    if (haveBoarded) {
                        break;
                    }
                }
                haveBoarded = false;
                break;
        }
    }
    for (let i = 0; i < endAdd.length; i++) {
        wagons.push(endAdd[i]);
    }
    wagons.map(Number);
    console.log(wagons.join(" "));

}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);