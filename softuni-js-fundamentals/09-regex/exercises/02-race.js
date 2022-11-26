function race(input) {
    let racers = input.shift().split(", ");
    let command = input.shift();
    let letterRegexp = /[A-Za-z]/g;
    let numRegexp = /[0-9]/g;
    let ranking = {};

    while (command != 'end of race') {
        let name = "";
        let letterMatch = command.match(letterRegexp);
        for (let letter of letterMatch) {
            name += letter;
        }
        let numMatch = command.match(numRegexp);
        let score = numMatch.reduce((a, b) => Number(a) + Number(b));
        if (racers.includes(name)) {
            if (ranking[name]) {
                ranking[name] += score;
            } else {
                ranking[name] = score;
            }
        }        
        command = input.shift();
    }

    let sorted = Object.entries(ranking).sort((a, b) => b[1] - a[1]);
    let counter = 0;
    let addin = "";
    for (let [player, score] of sorted) {
        counter++;
        switch (counter) {
            case 1: addin = "st"; break;
            case 2: addin = "nd"; break;
            case 3: addin = "rd"; break;
        }
        console.log(`${counter}${addin} place: ${player}`);
        if (counter == 3) {
            break;
        }
    }
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);