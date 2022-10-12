function passwordValidator(userInput) {

    let lengthValid = function (checkInput) {
        let passLength = checkInput.length;
        if (passLength >= 6 && passLength <= 10) {
            return true;
        } else {
            return false;
        }
    };
    let letterOrDigit = function (checkInput) {
        let passLength = checkInput.length;
        let isValid = true;
        for (let i = 0; i < passLength; i++) {
            let currentChar = checkInput[i];
            if (!(currentChar.match(/[a-z]/i) || currentChar.match(/[0-9]/i))) {
                isValid = false;
                break;
            }
        }
        if (!isValid) {
            return false;
        } else {
            return true;
        }
    };
    let atLeast2num = function (checkInput) {
        let isValid = false;
        let numberCounter = 0;
        for (let i = 0; i < checkInput.length; i++) {
            let currentChar = Number(checkInput[i]);
            if (!(isNaN(currentChar))) {
                numberCounter++;
            }
            if (numberCounter == 2) {
                isValid = true;
                break;
            }
        }
        if (isValid) {
            return true;
        } else {
            return false;
        }
    };

    if (lengthValid(userInput) && letterOrDigit(userInput) && atLeast2num(userInput)) {
        console.log(`Password is valid`);
    } else {
        if (!lengthValid(userInput)) {
            console.log(`Password must be between 6 and 10 characters`);
        }
        if (!letterOrDigit(userInput)) {
            console.log(`Password must consist only of letters and digits`);
        }
        if (!atLeast2num(userInput)) {
            console.log(`Password must have at least 2 digits`);
        }
    }

}

passwordValidator('Pa$s$s');
// passwordValidator('MyPass123');
// passwordValidator('logIn');