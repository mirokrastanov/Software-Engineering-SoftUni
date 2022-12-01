function passwordReset(input) {
    let password = input.shift();
    let commands = input.splice(0);

    while (commands.length > 0) {
        let [command, v1, v2] = commands.shift().split(" ");
        if (command == "Done") {
            console.log(`Your password is: ${password}`);
            break;
        }
        switch (command) {
            case "TakeOdd":
                let newPass = "";
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 != 0) {
                        newPass += password[i];
                    }
                }
                password = newPass;
                console.log(password);
                break;
            case "Cut":
                let index = Number(v1);
                let length = Number(v2);
                let subStr = password.substring(index, index + length);
                password = password.replace(subStr, "");
                console.log(password);
                break;
            case "Substitute":
                let checkFor = v1;
                let replaceWith = v2;
                if (!password.includes(checkFor)) {
                    console.log("Nothing to replace!");
                } else {
                    while (password.includes(checkFor)) {
                        password = password.replace(checkFor, replaceWith);
                    }
                    console.log(password);
                }
                break;
        }
    }
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]));
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]));