function guessTheNumber() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor((Math.random() * 100) + 1);

    let recursiveAsyncReadLine = function () {
        readline.question('Guess the number (0-100): ', guess => {
            console.log(guess);
            readline.close();
            // TODO - if statement + sequential prompts --> emitter + listener 
        });
    }
    recursiveAsyncReadLine();


    // TODO - refine & reform


}


guessTheNumber();