function theLift(inputArr) {
    let capacity = 4;
    let tourists = Number(inputArr[0]);
    let wagons = inputArr[1].split(" ").map(Number);
    
    for (let wagon = 0; wagon < wagons.length; wagon++) {
        let current = wagons[wagon];
        if (current < 4) {
            let free = capacity - current;
            if (tourists - free >= 0) {
                tourists -= free;
                wagons[wagon] = capacity;
            } else {
                current += tourists;
                wagons[wagon] = current;
                tourists = 0;
                break;
            }
        }
    }
    let full = 4 == wagons[wagons.length-1];
    if (full) {
        if (tourists > 0) {
            console.log(`There isn't enough space! ${tourists} people in a queue!`);
            console.log(wagons.join(" "));
        } else if (tourists == 0) {
            console.log(wagons.join(" "));
        }
    } else {
        if (tourists == 0) {
            console.log(`The lift has empty spots!`);
            console.log(wagons.join(" "));
        }
    }
}

theLift(["15", "0 0 0 0 0"]);
theLift(["15", "0 0 0 0"]);
theLift(["20", "0 2 0"]);