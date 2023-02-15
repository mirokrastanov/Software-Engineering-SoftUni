function ticketGenerator(ticketsInput, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    ticketsInput.map((el) => {
        let [destination, price, status] = el.split("|");
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    });
    let sorted = tickets.sort((a, b) => {
        if (typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare(b[sorting]);
        }
    });
    // console.log(sorted);
    return sorted;
}

ticketGenerator([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');