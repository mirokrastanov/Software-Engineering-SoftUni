function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trackType = input[2];
    let juniorPrice = 0;
    let seniorPrice = 0;
    let allBikers = juniors + seniors;
    let fullPrice = 0;
    
    switch (trackType) {
        case "trail":
            juniorPrice = 5.5;
            seniorPrice = 7;
            fullPrice = (juniorPrice * juniors) + (seniorPrice * seniors);
            break;
        case "cross-country":
            juniorPrice = 8;
            seniorPrice = 9.5;
            fullPrice = (juniorPrice * juniors) + (seniorPrice * seniors);
            if (allBikers >= 50) {
                fullPrice = fullPrice * 0.75;
            }
            break;
        case "downhill":
            juniorPrice = 12.25;
            seniorPrice = 13.75;
            fullPrice = (juniorPrice * juniors) + (seniorPrice * seniors);
            break;
        case "road":
            juniorPrice = 20;
            seniorPrice = 21.5;
            fullPrice = (juniorPrice * juniors) + (seniorPrice * seniors);
            break;
        default: break;
    }
    fullPrice = fullPrice * 0.95;
    console.log(`${fullPrice.toFixed(2)}`);

}

bikeRace(["10", "20", "trail"]);
bikeRace(["21", "26", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);
