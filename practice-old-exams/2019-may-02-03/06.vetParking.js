function vetParking(input) {
    let daysInput = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let pricePerHour = 0;
    let total = 0;
    let evenDay = false;

    for (let day = 1; day <= daysInput; day++) {
        let dailyTotal = 0;
        if (day % 2 === 0) {
            evenDay = true;
        } else {
            evenDay = false;
        }
        for (let hour = 1; hour <= hoursPerDay; hour++) {
            if (hour % 2 !== 0) {
                switch (evenDay) {
                    case true: pricePerHour = 2.5; break;
                    case false: pricePerHour = 1; break;
                    default: break;
                }
            } else {
                switch (evenDay) {
                    case true: pricePerHour = 1; break;
                    case false: pricePerHour = 1.25; break;
                    default: break;
                }
            }
            dailyTotal += pricePerHour;
            total += pricePerHour;
        }
        console.log(`Day: ${day} - ${dailyTotal.toFixed(2)} leva`);
    }
    console.log(`Total: ${total.toFixed(2)} leva`);

}

vetParking(["2", "5"]);
vetParking(["5", "2"]);