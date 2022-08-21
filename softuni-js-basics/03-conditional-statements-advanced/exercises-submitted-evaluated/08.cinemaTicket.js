function cinemaTicket(input) {
    let day = input[0];
    let ticket = 0;

    switch (day) {
        case ("Monday"):
        case ("Tuesday"):
            ticket = 12;
            break;
        case ("Wednesday"):
        case ("Thursday"):
            ticket = 14;
            break;
        case ("Friday"):
            ticket = 12;
            break;
        case ("Saturday"):
        case ("Sunday"):
            ticket = 16;
            break;
    }
    console.log(ticket);
}
cinemaTicket(["Monday"]);
cinemaTicket(["Friday"]);
cinemaTicket(["Sunday"]);
