function meetings(input) {
    let scheduled = {};

    input.forEach(element => {
        let [day, name] = element.split(" ");
        if (!scheduled[day]) {
            scheduled[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    });

    for (let [day, name] of Object.entries(scheduled)) {
        console.log(`${day} -> ${name}`);
    }

}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);