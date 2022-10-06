function rockPaperScissors(playerTurn) {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    // Player logic - turn definition
    if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
        console.log(`You choose ${rock}`);
    } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper;
        console.log(`You choose ${paper}`);
    } else if (playerTurn == "s" || playerTurn == "scissors") {
        playerTurn = scissors;
        console.log(`You choose ${scissors}`);
    } else {
        console.log("Invalid Input. Try Again...");
    }

    // Computer logic - turn definition
    let npcRandomNumber = Math.floor(Math.random() * 3);
    let npcTurn = "";
    if (npcRandomNumber == 0) {
        npcTurn = rock;
    } else if (npcRandomNumber == 1) {
        npcTurn = paper;
    } else if (npcRandomNumber == 2) {
        npcTurn = scissors;
    }
    console.log(`The computer chooses ${npcTurn}`);

    // Game logic - variations definition
    console.log("-------------------------------");
    if ((playerTurn == rock && npcTurn == scissors) ||
        (playerTurn == paper && npcTurn == rock) ||
        (playerTurn == scissors && npcTurn == paper)) {
        console.log("\x1b[33m You win! \x1b[0m");
    } else if ((playerTurn == rock && npcTurn == rock) ||
        (playerTurn == paper && npcTurn == paper) ||
        (playerTurn == scissors && npcTurn == scissors)) {
        console.log("\x1b[33m This game was a draw! \x1b[0m");
    } else if ((playerTurn == rock && npcTurn == paper) ||
        (playerTurn == paper && npcTurn == scissors) ||
        (playerTurn == scissors && npcTurn == rock)) {
        console.log("\x1b[33m You lose! \x1b[0m");
    }

    
}

rockPaperScissors("r");