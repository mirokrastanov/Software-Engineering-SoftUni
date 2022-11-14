function piccolo(input) {
    let commands = input.slice();
    let parking = new Set();

    while (commands.length > 0) {
        let command = commands.shift().split(", ");
        let direciton = command.shift();
        let plate = command.shift();
        switch (direciton) {
            case "IN":
                if (!(parking.has(plate))) {
                    parking.add(plate);
                }
                break;
            case "OUT":
                if (parking.has(plate)) {
                    parking.delete(plate);
                }
                break;
        }
    }

    let sorted = [];
    for (let iterator of parking) {
        sorted.push(iterator);
    }
    sorted = sorted.sort((a, b) => a - b || a.localeCompare(b));

    if (sorted.length > 0) {
        for (let toPrint of sorted) {
            console.log(toPrint);
        }
    } else {
        console.log("Parking Lot is Empty");
    }

}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);