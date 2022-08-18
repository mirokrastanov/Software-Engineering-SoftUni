function cinemaTickets(input) {
    let index = 0;
    let inputData = input[index];
    index++;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    // let isFinish = false;

    while (inputData !== "Finish") {
        let movie = inputData;
        let venueCapacity = Number(input[index]);
        index++;
        let venueCapacityLeft = venueCapacity;
        let ticketType = input[index];
        index++;
        let movieTickets = 0;
        while (ticketType !== "End") {
            if (venueCapacityLeft === 0) {
                index--;
                break;
            }
            venueCapacityLeft--;
            totalTickets++;
            movieTickets++;
            switch (ticketType) {
                case "student": studentTickets++; break;
                case "standard": standardTickets++; break;
                case "kid": kidTickets++; break;
                default: break;
            }
            ticketType = input[index];
            index++;
            if (ticketType === "Finish") {
                // isFinish = true;
                index--;
                break;
            }
        }
        console.log(`${movie} - ${(movieTickets / venueCapacity * 100).toFixed(2)}% full.`);
        // if (isFinish) {
        //     break;
        // }
        inputData = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTickets}`);
    // console.log(`${studentTickets} - ${standardTickets} - ${kidTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);

}


cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);
