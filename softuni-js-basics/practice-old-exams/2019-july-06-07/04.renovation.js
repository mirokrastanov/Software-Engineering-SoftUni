function renovation(input) {
    let wallH = Number(input[0]);
    let wallW = Number(input[1]);
    let areaToPaint = wallH * wallW * 4;
    let noPaintPercent = Number(input[2]);
    areaToPaint -= (areaToPaint * noPaintPercent / 100);
    let paintNeeded = areaToPaint;


    for (let i = 3; i < input.length; i++) {
        let paint = input[i];
        if (String(paint) === "Tired!") {
            console.log(`${paintNeeded} quadratic m left.`);
            break;
        }
        paintNeeded -= Number(paint);

        if (paintNeeded < 0) {
            console.log(`All walls are painted and you have ${Math.abs(paintNeeded)} l paint left!`);
            break;
        } else if (paintNeeded === 0) {
            console.log(`All walls are painted! Great job, Pesho!`);
            break;
        }

    }

}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2", "3", "25", "6", "7", "8"]);

