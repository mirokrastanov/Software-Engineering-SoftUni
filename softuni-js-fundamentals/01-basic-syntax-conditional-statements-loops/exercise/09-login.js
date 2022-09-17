function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = "";
    for (let i = username.length - 1; i >= 0; i--) {
        password += `${username[i]}`;
    }
    let loggedIn = false;
    let falseAttempts = 0;
    while (loggedIn == false) {
        let attemptedPassword = input[index];
        index++;
        if (attemptedPassword == password) {
            console.log(`User ${username} logged in.`);
            loggedIn = true;
        } else if (attemptedPassword == undefined) {
            break;
        } else {
            falseAttempts++;
            if (falseAttempts == 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }
    }

}

login(['Acer', 'login', 'go', 'let me in', 'recA']);