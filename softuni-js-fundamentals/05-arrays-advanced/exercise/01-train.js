function train(input) {
    let index = 0;
    let wagons = input[index].split(" ").map(str => Number(str));
    index++;
    let maxCapacity = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let current = 0;
    let endPush = [];

    while (command) {
        let type = command.split(" ");
        if (type.length > 1) {
            endPush.push(Number(type[1]));
        } else {
            let boarding = Number(type);
            while (boarding) {
                let boarded = Number(wagons[current]);
                let free = maxCapacity - boarded;
                if (boarding > free) {
                    current++;
                } else {
                    wagons[current] = boarded + boarding;
                    break;
                }
            }
            current = 0;
        }
        command = input[index];
        index++;
    }
    for (let i = 0; i < endPush.length; i++) {
        wagons.push(endPush[i]);
    }
    console.log(wagons.join(" "));

}

train(
    ['32 54 21 12 4 0 23',
        '75',
        'Add 10',
        'Add 0',
        '30',
        '10',
        '75']
);