function partyTime(input) {
    let guestVIP = [];
    let guestNonVIP = [];
    let attendees = [];
    let party = false;

    input.forEach(element => {
        if (element == "PARTY") {
            party = true;
        }
        if (party) {
            attendees.push(element);
        } else {
            if (element[0] == Number(element[0])) {
                guestVIP.push(element);
            } else {
                guestNonVIP.push(element);
            }
        }
    });

    attendees.forEach(element => {
        if (guestVIP.includes(element)) {
            let indexVIP = guestVIP.indexOf(element);
            guestVIP.splice(indexVIP, 1);
        } else if (guestNonVIP.includes(element)) {
            let indexNonVIP = guestNonVIP.indexOf(element);
            guestNonVIP.splice(indexNonVIP, 1);
        }
    });

    console.log(guestVIP.length + guestNonVIP.length)

    guestVIP.forEach(element => {
        console.log(element);
    });
    guestNonVIP.forEach(element => {
        console.log(element);
    });

}

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