function theatrePromotions(typeOfDay, age) {
    let ticketPrice = 0;
    let isValid = true;
    if (age >= 0) {
        if (age <= 18) {
            switch (typeOfDay) {
                case "Weekday": ticketPrice = 12; break;
                case "Weekend": ticketPrice = 15; break;
                case "Holiday": ticketPrice = 5; break;
                default: break;
            }
        } else if (age <= 64) {
            switch (typeOfDay) {
                case "Weekday": ticketPrice = 18; break;
                case "Weekend": ticketPrice = 20; break;
                case "Holiday": ticketPrice = 12; break;
                default: break;
            }
        } else if (age <= 122) {
            switch (typeOfDay) {
                case "Weekday": ticketPrice = 12; break;
                case "Weekend": ticketPrice = 15; break;
                case "Holiday": ticketPrice = 10; break;
                default: break;
            }
        } else {
            isValid = false;
            console.log("Error!");
        }
    } else {
        isValid = false;
        console.log("Error!");
    }
    if (isValid) {
        console.log(`${ticketPrice}$`);
    }

}

theatrePromotions('Holiday', -12);