function leapYear(inputYear) {
    if (inputYear % 4 == 0) {
        if (inputYear % 100 != 0) {
            console.log(`yes`);
        } else if (inputYear % 400 == 0) {
            console.log(`yes`);
        } else {
            console.log(`no`);
        }
    } else {
        console.log(`no`);
    }

}

leapYear(
    1984
);