function rockPaperScissors(playerTurn) {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    // Player logic - turn definition
    if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
        console.log(`The player chooses ${rock}`);
    } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper;
        console.log(`The player chooses ${paper}`);
    } else if (playerTurn == "s" || playerTurn == "scissors") {
        playerTurn = scissors;
        console.log(`The player chooses ${scissors}`);
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
    if ((playerTurn == rock && npcTurn == scissors) ||
        (playerTurn == paper && npcTurn == rock) ||
        (playerTurn == scissors && npcTurn == paper)) {
        console.log("You win!");
    } else if ((playerTurn == rock && npcTurn == rock) ||
        (playerTurn == paper && npcTurn == paper) ||
        (playerTurn == scissors && npcTurn == scissors)) {
        console.log("This game was a draw!");
    } else if ((playerTurn == rock && npcTurn == paper) ||
        (playerTurn == paper && npcTurn == scissors) ||
        (playerTurn == scissors && npcTurn == rock)) {
        console.log("You lose!");
    }

    




}

rockPaperScissors("r");