function computerRoom(input) {
    let month = input[0];
    let hoursSpent = Number(input[1]);
    let groupMembersCount = Number(input[2]);
    let timeOfDay = input[3];
    let pricePerHour = 0;

    switch (timeOfDay) {
        case "day":
            switch (month) {
                case "march":
                case "april":
                case "may":
                    pricePerHour = 10.5;
                    break;
                case "june":
                case "july":
                case "august":
                    pricePerHour = 12.6;
                    break;
            }
            break;
        case "night":
            switch (month) {
                case "march":
                case "april":
                case "may":
                    pricePerHour = 8.4;
                    break;
                case "june":
                case "july":
                case "august":
                    pricePerHour = 10.2;
                    break;
            }
            break;
        default: break;
    }

    if (groupMembersCount >= 4) {
        pricePerHour *= 0.9;
    }
    if (hoursSpent >= 5) {
        pricePerHour *= 0.5;
    }
    let totalCosts = groupMembersCount * pricePerHour * hoursSpent;

    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalCosts.toFixed(2)}`);


}

computerRoom(["march",
    "3",
    "3",
    "day"]);
// computerRoom(["july",
//     "5",
//     "5",
//     "night"]);