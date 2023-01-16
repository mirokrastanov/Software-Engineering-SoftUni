function guessTheNumber() {
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    let computerGuess = Math.floor((Math.random() * 100) + 1);
    
    let callNewGuess = function () {};

    callNewGuess();

}

guessTheNumber();