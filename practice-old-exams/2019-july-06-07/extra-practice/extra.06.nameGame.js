function nameGame(input) {
    let playerName = String(input[0]);
    let n = playerName.length;
    let player2Name = String(input[n + 1]);
    let player1Pts = 0;
    let player2Pts = 0;
    let index1 = 0;
    let index2 = 0;

    for (let i = 1; i <= input.length; i++) {
        let numInput1 = input[i];
        let numInput2 = input[i + n + 1];
        if (String(numInput1) === "Stop" || isNaN(numInput1)) {
            break;
        }
        let letterASCIIvalue1 = String(playerName).charCodeAt(index1);
        if (Number(numInput1) === Number(letterASCIIvalue1)) {
            player1Pts += 10;
        } else {
            player1Pts += 2;
        }
        index1++;
        if (String(numInput2) === "Stop" || isNaN(numInput2)) {
            break;
        }
        let letterASCIIvalue2 = String(player2Name).charCodeAt(index2);
        if (Number(numInput2) === Number(letterASCIIvalue2)) {
            player2Pts += 10;
        } else {
            player2Pts += 2;
        }
        index2++;
    }

    if (player1Pts > player2Pts) {
        // console.log(player1Pts + ": " + playerName);
        // console.log(player2Pts + ": " + player2Name);
        // console.log(`----`);
        console.log(`The winner is ${playerName} with ${player1Pts} points!`);
    } else if (player1Pts <= player2Pts) {
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
