function nameGame(input) {
    let index = 0;
    let name = input[index];
    index++;
    let bestPoints = 0;
    let winner = "";

    while (name != "Stop") {
        let currentPoints = 0;
        for (let i = 0; i < name.length; i++) {
            let number = Number(input[index]);
            index++;
            if (number == name.charCodeAt(i)) {
                currentPoints += 10;
            } else {
                currentPoints += 2;
            }
            // console.log(currentPoints);
            // console.log(`----`);
        }
        if (currentPoints >= bestPoints) {
            bestPoints = currentPoints;
            winner = name;
        }
        // console.log(name);
        // console.log(`---`);
        name = input[index];
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
nameGame(["Aurora",
"124",
"34",
"111",
"97",
"99",
"97",
"Jake",
"98",
"124",
"76",
"18",
"Ivo",
"80",
"65",
"87",
"Simon",
"124",
"34",
"111",
"97",
"99",
"Stop"]);

