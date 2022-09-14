function footballLeague(input) {
    let stadiumCapacity = Number(input[0]);
    let fansTotal = Number(input[1]);
    let fansTeam1 = 0;
    let sectorAfans = 0;
    let sectorVfans = 0;

    for (let fan = 1; fan <= fansTotal; fan++) {
        let sector = input[fan + 1];
        if (sector == "A" || sector == "B") {
            fansTeam1++;
            if (sector == "A") {
                sectorAfans++;
            }
        } else if (sector == "V" || sector == "G") {
            if (sector == "V") {
                sectorVfans++;
            }
        }
    }
    let fansTeam2 = fansTotal - fansTeam1;

    console.log(`${(sectorAfans / fansTotal * 100).toFixed(2)}%`);
    console.log(`${((fansTeam1 - sectorAfans) / fansTotal * 100).toFixed(2)}%`);
    console.log(`${(sectorVfans / fansTotal * 100).toFixed(2)}%`);
    console.log(`${((fansTeam2 - sectorVfans) / fansTotal * 100).toFixed(2)}%`);
    console.log(`${(fansTotal / stadiumCapacity * 100).toFixed(2)}%`);
    
}

footballLeague([
    '76',
    '10',
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B'
]);