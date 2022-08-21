function reno(input) {
    let wallHeight = Number(input[0]);
    let wallWidth = Number(input[1]);
    let wallArea = 4 * wallHeight * wallWidth;
    let noPaintPercent = Number(input[2]);
    let noPaintTotal = wallArea * noPaintPercent / 100;
    let paintAreaTotal = wallArea - noPaintTotal;
    let paintUsedEach = 0;
    let paintLitersLeft = paintAreaTotal;

    for (let i = 3; i < input.length; i++) {
        paintUsedEach = Number(input[i]);
        if (String(input[i]) === "Tired!") {
            console.log(`${paintLitersLeft} quadratic m left.`);
            break;
        }
        paintLitersLeft -= paintUsedEach;
        if (paintLitersLeft < 0) {
            console.log(`All walls are painted and you have ${Math.abs(paintLitersLeft)} l paint left!`);
            break;
        }
        if (paintLitersLeft === 0) {
            console.log(`All walls are painted! Great job, Pesho!`);
        }
    }
}

reno(["3",
"5",
"10",
"2",
"3",
"4",
"Tired!"]);
reno(["2",
"3",
"25",
"6",
"7",
"8"]);

