function vacationBooksList(input) {
    let pageAmount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);
    let overallHours = pageAmount / pagesPerHour;
    let hoursPerDay = overallHours / daysToRead;
    console.log(hoursPerDay);
}

vacationBooksList(["212", "20", "2"]);
vacationBooksList(["432", "15", "4"]);
