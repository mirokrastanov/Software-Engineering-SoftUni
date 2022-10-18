function houseParty(inputArray) {
    let guestsGoing = [];

    for (let guest = 0; guest < inputArray.length; guest++) {
        let currentArray = inputArray[guest].split(" ");
        let currentGuest = currentArray[0];
        let isGoing = currentArray[2] != "not";
        if (isGoing) {
            if (guestsGoing.includes(currentGuest)) {
                console.log(`${currentGuest} is already in the list!`)
            } else {
                guestsGoing.push(currentGuest);
            }
        } else {
            if (guestsGoing.includes(currentGuest)) {
                guestsGoing = guestsGoing.filter(x => x != currentGuest);
            } else {
                console.log(`${currentGuest} is not in the list!`)
            }
        }
    }
    console.log(guestsGoing.join("\n"));

}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);