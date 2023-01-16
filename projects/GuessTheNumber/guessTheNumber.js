function guessTheNumber() {

    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    
    let computerGuess = Math.floor((Math.random() * 100) + 1);

    
    let callNewGuess = function () {
        readline.question('Guess the number (0-100): ', (userInput) => {
            if (userInput.trim() != Number(userInput.trim())) {
                
                callNewGuess();
            } else if (userInput.trim() == computerGuess) {
                
                readline.close();
            } else if (userInput.trim() > computerGuess) {
                
                callNewGuess();
            } else if (userInput.trim() < computerGuess) {
               
                callNewGuess();
            }
        });
    };

    callNewGuess();



}

guessTheNumber();