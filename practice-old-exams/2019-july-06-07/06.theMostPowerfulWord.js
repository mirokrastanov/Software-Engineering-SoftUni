function theMostPowerfulWord(input) {
    let index = 0;
    let word = String(input[index]);
    index++;
    let bestWord = "";
    let bestWordValue = 0;

    while (word !== "End of words") {
        let currentWordValue = 0;
        let firstL = String(word[0]);
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            let letterValue = String(letter).charCodeAt();
            currentWordValue += letterValue;
        }
        switch (firstL) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
            case "y":
            case "Y":
                currentWordValue = currentWordValue * word.length;
                break;
            default:
                currentWordValue = (currentWordValue / word.length).toFixed(0);
                break;
        }
        if (currentWordValue > bestWordValue) {
            bestWord = word;
            bestWordValue = currentWordValue;
        }
        word = String(input[index]);
        index++;
    }
    console.log(`The most powerful word is ${bestWord} - ${bestWordValue}`);
}

theMostPowerfulWord(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"]);
theMostPowerfulWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"]);

