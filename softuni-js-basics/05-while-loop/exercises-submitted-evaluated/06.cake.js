function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let pcsTotal = width * length;
    let pcsTaken = Number(input[index]);
    index++;
    let pcsLeft = pcsTotal - pcsTaken;

    while (index <= input.length) {

        if (pcsLeft <= 0) {
            console.log(`No more cake left! You need ${Math.abs(pcsLeft)} pieces more.`);
            break;
        }
        pcsTaken = input[index];
        index++;
        if (String(pcsTaken) === "STOP") {
            console.log(`${pcsLeft} pieces are left.`);
            break;
        } else {
            pcsLeft -= Number(pcsTaken);
        }

    }

}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);
