function trekkingMania(input) {
    let index = 0;
    let groups = Number(input[index]);
    let totalClimbers = 0;
    let musala = 0;
    let monblac = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;
    index++;

    for (let i = 1; i <= groups; i++) {
        let groupSize = Number(input[index]);
        index++;
        totalClimbers += groupSize;
        if (groupSize <= 5) {
            musala += groupSize;
        } else if (groupSize <= 12) {
            monblac += groupSize;
        } else if (groupSize <= 25) {
            kili += groupSize;
        } else if (groupSize <= 40) {
            k2 += groupSize;
        } else {
            everest += groupSize;
        }
    }
    musala = musala / totalClimbers * 100;
    monblac = monblac / totalClimbers * 100;
    kili = kili / totalClimbers * 100;
    k2 = k2 / totalClimbers * 100;
    everest = everest / totalClimbers * 100;
    console.log(`${musala.toFixed(2)}%`);
    console.log(`${monblac.toFixed(2)}%`);
    console.log(`${kili.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);

}

trekkingMania(['10',
    '10',
    '5',
    '1',
    '100',
    '12',
    '26',
    '17',
    '37',
    '40',
    '78'])