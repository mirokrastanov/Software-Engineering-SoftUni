function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let initialPts = Number(input[1]);
    let stageReached = "";
    let totalPts = initialPts;
    let wins = 0;

    for (let i = 2; i < input.length; i++) {
        stageReached = String(input[i]);
        switch (stageReached) {
            case "W": totalPts += 2000; wins += 1; break;
            case "F": totalPts += 1200; break;
            case "SF": totalPts += 720; break;
            default: break;
        }
    }
    let winPercent = wins / tournaments * 100;
    let avgPts = (totalPts - initialPts) / tournaments;

    console.log(`Final points: ${totalPts}`);
    console.log(`Average points: ${Math.floor(avgPts)}`);
    console.log(`${winPercent.toFixed(2)}%`);

}

tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);
tennisRanklist(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"]);

