function oscarsWeek(input) {
    let movie = input[0];
    let spaceType = input[1];
    let soldTickets = Number(input[2]);
    let ticketPrice = 0;

    switch (movie) {
        case "A Star Is Born":
            switch (spaceType) {
                case "normal": ticketPrice = 7.5; break;
                case "luxury": ticketPrice = 10.5; break;
                case "ultra luxury": ticketPrice = 13.5; break;
                default: break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (spaceType) {
                case "normal": ticketPrice = 7.35; break;
                case "luxury": ticketPrice = 9.45; break;
                case "ultra luxury": ticketPrice = 12.75; break;
                default: break;
            }
            break;
        case "Green Book":
            switch (spaceType) {
                case "normal": ticketPrice = 8.15; break;
                case "luxury": ticketPrice = 10.25; break;
                case "ultra luxury": ticketPrice = 13.25; break;
                default: break;
            }
            break;
        case "The Favourite":
            switch (spaceType) {
                case "normal": ticketPrice = 8.75; break;
                case "luxury": ticketPrice = 11.55; break;
                case "ultra luxury": ticketPrice = 13.95; break;
                default: break;
            }
            break;
        default: break;
    }

    let total = soldTickets * ticketPrice;
    console.log(`${movie} -> ${total.toFixed(2)} lv.`);


}

oscarsWeek(["A Star Is Born",
    "luxury",
    "42"]);
oscarsWeek(["Green Book",
    "normal",
    "63"]);
oscarsWeek(["The Favourite",
    "ultra luxury",
    "34"]);
