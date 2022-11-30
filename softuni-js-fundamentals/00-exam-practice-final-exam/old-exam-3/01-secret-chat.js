function secretChat(input) {
    let message = input.shift();
    let commands = input.splice(0);

    while (commands.length > 0) {
        let command = commands.shift();
        if (command == "Reveal") {
            console.log(`You have a new text message: ${message}`);
            break;
        }
        let [type, value1, value2] = command.split(":|:");
        switch (type) {
            case "InsertSpace":
                let insertAt = Number(value1);
                let strStart = message.substring(0, insertAt);
                let strEnd = message.substring(insertAt);
                message = strStart + " " + strEnd;
                console.log(message);
                break;
            case "Reverse":
                let revStr = value1;
                if (message.includes(revStr)) {
                    let indexOf = message.indexOf(revStr);
                    let strStart = message.substring(0, indexOf);
                    let strEnd = message.substring(indexOf + revStr.length);
                    revStr = revStr.split("").reverse().join("");
                    message = strStart + strEnd + revStr;
                    console.log(message);
                } else {
                    console.log("error");
                }
                break;
            case "ChangeAll":
                let toChange = value1;
                let changeWith = value2;
                while (message.includes(toChange)) {
                    message = message.replace(toChange, changeWith);
                }
                console.log(message);
                break;
        }
    }
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);