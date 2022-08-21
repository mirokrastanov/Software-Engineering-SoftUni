//another solution - new logic and attempting to account for a few extra things (using only the given inputs, without my own extra inputs)
function nameGamePractice(input) {
    let index = 0;
    let name = String(input[index]);
    index++;
    let bestPoints = 0;
    let winner = "";

    while (name !== "Stop") {
        let currentPoints = 0;
        for (let i = 0; i < name.length; i++) {
            let n = Number(input[index]);
            let letter = name[i];
            let letterValue = String(letter).charCodeAt();
            if (n === letterValue) {
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
        name = String(input[index]);
        index++;
    }
    console.log(`The winner is ${winner} with ${bestPoints} points!`);

}

// nameGamePractice(["Ivan",
// "73",
// "20",
// "98",
// "110",
// "Ivo",
// "80",
// "65",
// "87",
// "Stop"]);
nameGamePractice(["Pesho",
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

