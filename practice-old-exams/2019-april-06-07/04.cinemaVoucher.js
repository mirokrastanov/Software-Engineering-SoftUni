function cinemaVoucher(input) {
    let index = 0;
    let voucherAmount = Number(input[index]);
    index++;
    let item = input[index];
    index++;
    let ticketCounter = 0;
    let otherItemsCounter = 0;

    while (item !== "End") {
        let itemLength = item.length;
        let itemPrice = 0;
        let isTicket = false;
        if (itemLength > 8) {
            isTicket = true;
            ticketCounter++;
            itemPrice = item.charCodeAt(0) + item.charCodeAt(1);
        } else {
            otherItemsCounter++;
            itemPrice = item.charCodeAt(0);
        }
        if (voucherAmount < itemPrice) {
            if (isTicket) {
                ticketCounter--;
            } else {
                otherItemsCounter--;
            }
            break;
        }
        voucherAmount -= itemPrice;

        item = input[index];
        index++;
    }
    console.log(ticketCounter);
    console.log(otherItemsCounter);


}

cinemaVoucher(["300",
    "Captain Marvel",
    "popcorn",
    "Pepsi"]);
cinemaVoucher(["1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"]);


