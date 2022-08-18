function footballTournament(input) {
    let teamName = String(input[0]);
    let gamesThisSeason = Number(input[1]);
    let ptsTotal = 0;
    let gameOutcome = "";
    let wins = 0;
    let draws = 0;
    let losses = 0;
    let winPercent = 0;

    if (gamesThisSeason === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    } else if (gamesThisSeason >= 1) {
        for (let i = 2; i < input.length; i++) {
            gameOutcome = String(input[i]);
            switch (gameOutcome) {
                case "W": wins++; ptsTotal += 3; break;
                case "D": draws++; ptsTotal += 1; break;
                case "L": losses++; break;
                default: break;
            }
        }
        winPercent = wins / gamesThisSeason * 100;
        console.log(`${teamName} has won ${ptsTotal} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${wins}`);
        console.log(`## D: ${draws}`);
        console.log(`## L: ${losses}`);
        console.log(`Win rate: ${winPercent.toFixed(2)}%`);
    }
}

footballTournament(["Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"]);
footballTournament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"]);
footballTournament(["Chelsea",
    "0"]);


