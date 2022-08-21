function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let groupMembers = Number(input[2]);
    let nights = Number(input[3]);
    let pricePerNight = 0;
    let priceTotal = 0;
    let sport = 0;

    switch (season) {
        case "Winter":
            switch (groupType) {
                case "boys":
                    pricePerNight = 9.6; sport = "Judo"; break;
                case "girls":
                    pricePerNight = 9.6; sport = "Gymnastics"; break;
                case "mixed":
                    pricePerNight = 10; sport = "Ski"; break;
                default: break;
            }
            break;
        case "Spring":
            switch (groupType) {
                case "boys":
                    pricePerNight = 7.2; sport = "Tennis"; break;
                case "girls":
                    pricePerNight = 7.2; sport = "Athletics"; break;
                case "mixed":
                    pricePerNight = 9.5; sport = "Cycling"; break;
                default: break;
            }
            break;
        case "Summer":
            switch (groupType) {
                case "boys":
                    pricePerNight = 15; sport = "Football"; break;
                case "girls":
                    pricePerNight = 15; sport = "Volleyball"; break;
                case "mixed":
                    pricePerNight = 20; sport = "Swimming"; break;
                default: break;
            }
            break;
        default: break;
    }
    priceTotal = nights * pricePerNight * groupMembers;
    if (groupMembers >= 50) {
        priceTotal = priceTotal * 0.5;
    } else if (groupMembers >= 20 && groupMembers < 50) {
        priceTotal = priceTotal * 0.85;
    } else if (groupMembers >= 10 && groupMembers < 20) {
        priceTotal = priceTotal * 0.95;
    }
    console.log(`${sport} ${priceTotal.toFixed(2)} lv.`);

}

schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);
