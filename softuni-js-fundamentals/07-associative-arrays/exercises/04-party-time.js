function partyTime(input) {
    let commands = input.slice();
    let partyIndex = commands.indexOf("PARTY");
    let attending = commands.splice(partyIndex + 1);
    commands.pop();
    let guests = commands.splice(0);

    while (attending.length > 0) {
        let current = attending.shift();
        let findIndex = guests.indexOf(current);
        if (findIndex != -1) {
            guests.splice(findIndex, 1);
        }
    }

   console.log(guests.length);

    for (let guest of guests) {
        if (guest[0] == Number(guest[0])) {
            console.log(guest);
        }
    }
    for (let guest of guests) {
        if (guest[0] != Number(guest[0])) {
            console.log(guest);
        }
    }

}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);