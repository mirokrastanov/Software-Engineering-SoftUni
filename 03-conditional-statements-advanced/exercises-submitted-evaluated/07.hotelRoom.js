function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let type = 0;
    let studioPrice = 0;
    let apartmentPrice = 0;
    let studioTotal = 0;
    let apartmentTotal = 0;
    switch (month) {
        case ("May"):
        case ("October"):
            studioPrice = 50;
            apartmentPrice = 65;
            if (nights > 7 && nights <=14) {
                studioPrice = studioPrice * 0.95;
            } else if (nights > 14) {
                studioPrice = studioPrice * 0.7;
            }
            break;
        case ("June"):
        case ("September"):
            studioPrice = 75.2;
            apartmentPrice = 68.7;
            if (nights > 14) {
                studioPrice = studioPrice * 0.8;
            }
            break;
        case ("July"):
        case ("August"):
            studioPrice = 76;
            apartmentPrice = 77;
            break;
    }
    if (nights > 14) {
        apartmentPrice = apartmentPrice * 0.9;
    }
    studioTotal = studioPrice * nights;
    apartmentTotal = apartmentPrice * nights;
    console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);

}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
