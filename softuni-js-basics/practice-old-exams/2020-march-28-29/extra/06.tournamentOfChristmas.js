function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let sport = input[index];
    index++;
    let score = input[index];
    index++;
    let wins = 0;
    let losses = 0;
    let moneyEarned = 0;
    let daysWon = 0;

    for (let i = 1; i <= days; i++) {
        let moneyPerDay = 0;
        wins = 0;
        losses = 0;
        while (sport !== "Finish") {
            switch (score) {
                case "win": moneyPerDay += 20; wins++; break;
                case "lose": losses++; break;
                default: break;
            }
            sport = input[index];
            index++;
            score = input[index];
            index++;
        }
        if (wins > losses) {
            moneyPerDay *= 1.1;
            daysWon++;
        }
        moneyEarned += moneyPerDay;
        index--;
        sport = input[index];
        index++;
        score = input[index];
        index++;
    }

    if ((days - daysWon) < daysWon) {
        moneyEarned *= 1.2;
        console.log(`You won the tournament! Total raised money: ${moneyEarned.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyEarned.toFixed(2)}`);
    }


}

tournamentOfChristmas([
    '2',
    'volleyball',
    'win',
    'football',
    'lose',
    'basketball',
    'win',
    'Finish',
    'golf',
    'win',
    'tennis',
    'win',
    'badminton',
    'win',
    'Finish'])
tournamentOfChristmas([
    '3',
    'darts',
    'lose',
    'handball',
    'lose',
    'judo',
    'win',
    'Finish',
    'snooker',
    'lose',
    'swimming',
    'lose',
    'squash',
    'lose',
    'table tennis',
    'win',
    'Finish',
    'volleyball',
    'win',
    'basketball',
    'win',
    'Finish'])