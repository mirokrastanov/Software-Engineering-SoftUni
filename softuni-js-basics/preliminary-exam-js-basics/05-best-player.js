function bestPlayer(input) {
    let index = 0;
    let bestPlayer = "";
    let bestScore = 0;
    let command = input[index];
    index++;
    let scoredHatTrick = false;

    while (command !== "END") {
        scoredHatTrick = false;
        let currentPlayer = command;
        let currentScore = Number(input[index]);
        index++;
        if (currentScore >= 3) {
            scoredHatTrick = true;
        }
        if (currentScore > bestScore) {
            bestPlayer = currentPlayer;
            bestScore = currentScore;
        }
        if (currentScore >= 10) {
            break;
        }
        command = input[index];
        index++;
    }
    console.log(`${bestPlayer} is the best player!`);
    if (scoredHatTrick) {
        console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestScore} goals.`);
    }

}


bestPlayer(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"]);
bestPlayer(["Silva",
    "5",
    "Harry Kane",
    "10"]);
bestPlayer(["Petrov",
    "2",
    "Drogba",
    "11"]);
bestPlayer(["Rooney",
    "1",
    "Junior",
    "2",
    "Paolinio",
    "2",
    "END"]);
bestPlayer(["Zidane",
    "1",
    "Felipe",
    "2",
    "Johnson",
    "4",
    "END"]);