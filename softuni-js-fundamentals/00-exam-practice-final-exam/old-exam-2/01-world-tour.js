function worldTour(input) {
    let stops = input.shift();
    let commands = input.splice(0);

    while (commands.length > 0) {
        let stop = commands.shift();
        if (stop == "Travel") {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }
        let [command, value1, value2] = stop.split(":");
        switch (command) {
            case "Add Stop":
                let toInsert = value2;
                let insertAt = Number(value1);
                if (insertAt >= 0 && insertAt <= stops.length - 1) {
                    let subStart = stops.substring(0, insertAt);
                    let subEnd = stops.substring(insertAt);
                    stops = subStart + toInsert + subEnd;
                }
                console.log(stops);
                break;
            case "Remove Stop":
                let startAt = Number(value1);
                let endAt = Number(value2);
                startAt = startAt >= endAt ? startAt = Number(value2) : startAt;
                endAt = startAt == endAt ? endAt = Number(value1) : endAt;
                if (startAt >= 0 && startAt <= stops.length - 1 && endAt >= 0 && endAt <= stops.length - 1) {
                    let subStart = stops.substring(0, startAt);
                    let subEnd = stops.substring(endAt + 1);
                    stops = subStart + subEnd;
                }
                console.log(stops);
                break;
            case "Switch":
                let toReplace = value1;
                let replaceWith = value2;
                if (stops.includes(toReplace)) {
                    stops = stops.replace(toReplace, replaceWith);
                }
                console.log(stops);
                break;
        }
    }
}

worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]));