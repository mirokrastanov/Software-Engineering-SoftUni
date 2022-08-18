function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let groupSizePer = 0;
    let mountMusala = 0;
    let mountMontblanc = 0;
    let mountKilimanjaro = 0;
    let mountK2 = 0;
    let mountEverest = 0;
    let totalClimbers = 0;

    for (let i = 1; i < input.length; i++) {
        groupSizePer = Number(input[i]);
        totalClimbers += groupSizePer;
        if (groupSizePer <= 5) {
            mountMusala += groupSizePer;
        } else if (groupSizePer >= 6 && groupSizePer <= 12) {
            mountMontblanc += groupSizePer;
        } else if (groupSizePer >= 13 && groupSizePer <= 25) {
            mountKilimanjaro += groupSizePer;
        } else if (groupSizePer >= 26 && groupSizePer <= 40) {
            mountK2 += groupSizePer;
        } else if (groupSizePer >= 41) {
            mountEverest += groupSizePer;
        }
    }
    let mountMusalaPercent = mountMusala / totalClimbers * 100;
    let mountMontblancPercent = mountMontblanc / totalClimbers * 100;
    let mountKilimanjaroPercent = mountKilimanjaro / totalClimbers * 100;
    let mountK2Percent = mountK2 / totalClimbers * 100;
    let mountEverestPercent = mountEverest / totalClimbers * 100;

    console.log(`${mountMusalaPercent.toFixed(2)}%`);
    console.log(`${mountMontblancPercent.toFixed(2)}%`);
    console.log(`${mountKilimanjaroPercent.toFixed(2)}%`);
    console.log(`${mountK2Percent.toFixed(2)}%`);
    console.log(`${mountEverestPercent.toFixed(2)}%`);


}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"]);