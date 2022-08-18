function nameGame(input) {
    let name = input[0];
    let bestPoints = 0;
    let winner = "";
    let index = 0;

    while (name != "Stop") {
        let currentPoints = 0;
        for (let i = 0; i < name.length; i++) {
            let number = Number(input[index + 1]);
            if (number == name.charCodeAt(i)) {
                currentPoints += 10;
            } else {
                currentPoints += 2;
            }
            index++;
        }
        if (currentPoints >= bestPoints) {
            bestPoints = currentPoints;
            winner = name;
        }
        // console.log(name);
        // console.log(`---`);
        name = input[index + 1];
        index++;
        // console.log(name);
        // console.log(name.length);
    }

    console.log(`The winner is ${winner} with ${bestPoints} points!`);
}



nameGame(["Ivo",
    "80",
    "65",
    "87",
    "Ivan",
    "73",
    "20",
    "98",
    "110",
    "Stop"]);

nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"]);
nameGame(["Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"]);

