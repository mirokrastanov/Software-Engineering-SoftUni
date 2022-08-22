function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTickets = 0;
    while (command !== "Finish") {
        let movie = command;
        let seatsTotal = Number(input[index]);
        index++;
        let seatsTaken = 0;
        let ticket = input[index];
        index++;
        let flag = false;
        while (ticket !== "End") {
            switch (ticket) {
                case "student": studentCounter++; seatsTaken++; totalTickets++; break;
                case "standard": standardCounter++; seatsTaken++; totalTickets++; break;
                case "kid": kidCounter++; seatsTaken++; totalTickets++; break;
                default: break;
            }
            ticket = input[index];
            index++;
            if (ticket === "Finish") {
                index--;
                break;
            } 
            if (ticket !== "student" && ticket !== "standard" && ticket !== "kid" && ticket !== "End") {
                flag = true;
                break;
            }
        }
        let capacityPercent = seatsTaken / seatsTotal * 100;
        console.log(`${movie} - ${capacityPercent.toFixed(2)}% full.`);
        if (flag) {
            command = ticket;
            continue;
        }
        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentCounter / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTickets * 100).toFixed(2)}% kids tickets.`);

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
// cinemaTickets(["The Matrix",
//     "20",
//     "student",
//     "standard",
//     "kid",
//     "kid",
//     "student",
//     "student",
//     "standard",
//     "student",
//     "End",
//     "The Green Mile",
//     "17",
//     "student",
//     "standard",
//     "standard",
//     "student",
//     "standard",
//     "student",
//     "End",
//     "Amadeus",
//     "3",
//     "standard",
//     "standard",
//     "standard",
//     "Finish"]);
// cinemaTickets([
//     'Shutter Island', '9', 'standard',
//     'standard', 'standard', 'student',
//     'student', 'student', 'kid',
//     'kid', 'kid', 'Rush',
//     '9', 'standard', 'standard',
//     'standard', 'student', 'student',
//     'student', 'kid', 'kid',
//     'kid', 'Deadpool', '9',
//     'standard', 'standard', 'standard',
//     'student', 'student', 'student',
//     'kid', 'kid', 'kid',
//     'Finish'
// ]);

