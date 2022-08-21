function spaceship(input) {
    let shipWidth = Number(input[0]);
    let shipLength = Number(input[1]);
    let shipHeight = Number(input[2]);
    let astronautMedianHeight = Number(input[3]);

    let roomVolume = 2 * 2 * (astronautMedianHeight + 0.4);
    let shipVolume = shipHeight * shipLength * shipWidth;
    let astronautsCapacity = Math.floor(shipVolume / roomVolume);

    if (astronautsCapacity >= 3 && astronautsCapacity <= 10) {
        console.log(`The spacecraft holds ${astronautsCapacity} astronauts.`);
    } else if (astronautsCapacity < 3) {
        console.log(`The spacecraft is too small.`);
    } else if (astronautsCapacity > 10) {
        console.log(`The spacecraft is too big.`);
    }


}

spaceship(["3.5",
"4",
"5",
"1.70"]);
// spaceship(["4.5",
// "4.8",
// "5",
// "1.75"]);
// spaceship(["3",
// "3", 
// "4",
// "1.68"]);