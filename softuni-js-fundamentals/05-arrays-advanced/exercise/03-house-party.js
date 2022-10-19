function houseParty(inputArr) {
    let going = [];

    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i].split(" ");
        let guest = command[0];
        if (command.includes("not")) {
            if (going.includes(guest)) {
                let index = going.indexOf(guest);
                going.splice(index, 1);
            } else {
                console.log(`${guest} is not in the list!`);
            }
        } else {
            if (going.includes(guest)) {
                console.log(`${guest} is already in the list!`);
            } else {
                going.push(guest);
            }
        }
    }
    console.log(going.join("\n"));
    
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);