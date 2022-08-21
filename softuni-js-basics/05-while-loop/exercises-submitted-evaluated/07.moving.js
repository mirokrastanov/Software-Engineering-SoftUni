function moving(input) {
    let index = 0;
    let volumeWidth = Number(input[index]);
    index++;
    let volumeLength = Number(input[index]);
    index++;
    let volumeHeight = Number(input[index]);
    index++;
    let volumeLeft = 0;
    let volumeTotal = volumeHeight * volumeLength * volumeWidth;
    let boxCount = input[index];
    index++;
    if (boxCount === "Done") {
        return;
    } else {
        boxCount = Number(boxCount);
        volumeLeft = volumeTotal - boxCount;
    }
    while (index <= input.length) {
        if (volumeLeft <= 0) {
            console.log(`No more free space! You need ${Math.abs(volumeLeft)} Cubic meters more.`);
            break;
        }
        boxCount = input[index];
        index++;
        if (boxCount === "Done") {
            console.log(`${volumeLeft} Cubic meters left.`);
            break;
        } else {
            boxCount = Number(boxCount);
            volumeLeft -= boxCount;
        }
    }

}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);
