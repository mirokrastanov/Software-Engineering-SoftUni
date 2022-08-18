function suitcasesLoad(input) {
    let index = 0;
    let cargoCapacity = Number(input[index]);
    index++;
    let cargoSpaceLeft = cargoCapacity;
    let luggageCounter = 0;
    let luggageVolume = input[index];
    index++;

    while (luggageVolume !== "End") {
        luggageVolume = Number(luggageVolume);
        luggageCounter++;
        if (luggageCounter % 3 === 0) {
            luggageVolume *= 1.1;
        }
        if (cargoSpaceLeft < luggageVolume) {
            luggageCounter--;
            console.log(`No more space!`);
            break;
        }
        cargoSpaceLeft -= luggageVolume;


        luggageVolume = input[index];
        index++;
    }
    if (luggageVolume === "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
    }
    console.log(`Statistic: ${luggageCounter} suitcases loaded.`);

}

suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);