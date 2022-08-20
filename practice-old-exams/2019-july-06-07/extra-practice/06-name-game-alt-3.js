//complicated solution, incorporating the ASCII conversion inside the code 
function nameGame(input) {
    let playerName = String(input[0]);
    let n = playerName.length;
    let player2Name = String(input[n + 1]);
    let player1Pts = 0;
    let player2Pts = 0;
    let index1 = 0;
    let index2 = 0;

    for (let i = 1; i <= n; i++) {
        let letterNumInput = input[i];
        if (letterNumInput >= 0 && letterNumInput <= 127) {
            if (String(letterNumInput) === "Stop") {
                break;
            }
            let letterASCIIvalue = String(playerName).charCodeAt(index1);
            if (Number(letterNumInput) === Number(letterASCIIvalue)) {
                player1Pts += 10;
            } else {
                player1Pts += 2;
            }
            index1++;
        }
    }
    for (let i = n + 2; i <= input.length; i++) {
        let letterNumInput = input[i];
        if (letterNumInput >= 0 && letterNumInput <= 127) {
            if (String(letterNumInput) === "Stop") {
                break;
            }
            let letterASCIIvalue = String(player2Name).charCodeAt(index2);
            if (Number(letterNumInput) === Number(letterASCIIvalue)) {
                player2Pts += 10;
            } else {
                player2Pts += 2;
            }
            index2++;
        }
    }
    if (player1Pts > player2Pts) {
        // console.log(player1Pts + ": " + playerName);
        // console.log(player2Pts + ": " + player2Name);
        // console.log(`----`);
        console.log(`The winner is ${playerName} with ${player1Pts} points!`);
    } else if (player2Pts >= player1Pts) {
        // console.log(player1Pts + ": " + playerName);
        // console.log(player2Pts + ": " + player2Name);
        // console.log(`----`);
        console.log(`The winner is ${player2Name} with ${player2Pts} points!`);
    }

}

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

// nameGame(["Pesho",
//     "124",
//     "34",
//     "111",
//     "97",
//     "99",
//     "Gosho",
//     "98",
//     "124",
//     "88",
//     "76",
//     "18",
//     "Stop"]);
