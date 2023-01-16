function guessTheNumber() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor((Math.random() * 100) + 1);

    readline.question('Guess the number (0-100): ', userInput => {
        // TODO - fix the scenario with a NaN input
        if (userInput.trim() == computerGuess) {
            readline.close();
        } else if (userInput.trim() > computerGuess) {
            readline.setPrompt('Too High!\nGuess the number (0-100): ');
            readline.prompt();
            readline.on('line', (userInput) => {
                if (userInput.trim() == computerGuess) {
                    readline.close();
                } else if (userInput.trim() > computerGuess) {
                    readline.setPrompt(`Your answer of ${userInput} is too high! Try again. \nGuess the number(0-100): `);
                    readline.prompt();
                } else if (userInput.trim() < computerGuess) {
                    readline.setPrompt(`Your answer of ${userInput} is too low! Try again. \nGuess the number(0-100): `);
                    readline.prompt();
                }
            });
        } else if (userInput.trim() < computerGuess) {
            readline.setPrompt('Too Low! Try again. \nGuess the number (0-100): ');
            readline.prompt();
            readline.on('line', (userInput) => {
                if (userInput.trim() == computerGuess) {
                    readline.close();
                } else if (userInput.trim() > computerGuess) {
                    readline.setPrompt(`Your answer of ${userInput} is too high! Try again. \nGuess the number(0-100): `);
                    readline.prompt();
                } else if (userInput.trim() < computerGuess) {
                    readline.setPrompt(`Your answer of ${userInput} is too low! Try again. \nGuess the number(0-100): `);
                    readline.prompt();
                }
            });
        } else {
            readline.setPrompt(`Your input of ${userInput} is not a number! Please input a number(0-100): `);
            readline.prompt();
            // TODO - recursion
        }
    });

    readline.on('close', () => {
        console.log(`Correct !!!`);
    });





}


guessTheNumber();