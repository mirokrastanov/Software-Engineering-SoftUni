function streamOfLetters(input) {
    //this program reads a hidden message embedded inside a stream of letters
    let index = 0;
    let command = input[index];
    index++;
    let finalWord = "";
    let flagC = false;
    let flagO = false;
    let flagN = false;
    let currentWord = "";

    while (command !== "End") {
        let currentLetter = command;
        if (flagC === true & flagO === true & flagN === true) {
            finalWord += " " + currentWord;
            flagC = false;
            flagO = false;
            flagN = false;
            currentWord = "";
            continue;
        }
        if (currentLetter === "c") {
            if (flagC) {
                currentWord += currentLetter;
            } else {
                flagC = true;
            }
        } else if (currentLetter === "o") {
            if (flagO) {
                currentWord += currentLetter;
            } else {
                flagO = true;
            }
        } else if (currentLetter === "n") {
            if (flagN) {
                currentWord += currentLetter;
            } else {
                flagN = true;
            }
        } else {
            if (currentLetter.match(/[a-z]/i)) {
                currentWord += currentLetter;
            }
        }

        command = input[index];
        index++;
    }
    if (command === "End" && flagC === true & flagO === true & flagN === true) {
        finalWord += " " + currentWord;
    }
    console.log(finalWord);

}

// streamOfLetters([
//     'H',
//     'n',
//     'e',
//     'l',
//     'l',
//     'o',
//     'o',
//     'c',
//     't',
//     'c',
//     'h',
//     'o',
//     'e',
//     'r',
//     'e',
//     'n',
//     'e',
//     'End'
// ]);
// streamOfLetters([
//     '%',
//     '!',
//     'c',
//     '^',
//     'B',
//     '`',
//     'o',
//     '%',
//     'o',
//     'o',
//     'M',
//     ')',
//     '{',
//     'n',
//     '\\',
//     'A',
//     'D',
//     'End'
// ]);
streamOfLetters([
    'o',
    'S',
    '%',
    'o',
    'l',
    '^',
    'v',
    'e',
    'c',
    'n',
    '&',
    'm',
    'e',
    'c',
    'o',
    'n',
    'End'
])