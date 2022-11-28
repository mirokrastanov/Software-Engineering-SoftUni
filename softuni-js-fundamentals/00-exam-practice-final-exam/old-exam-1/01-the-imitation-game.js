function imitationGame(input) {
    let workindArr = input.slice();
    let str = workindArr.shift().split("");
    let messages = workindArr.splice(0);
    let timeToDecode = false;
    while (messages.length > 0) {
        let message = messages.shift();
        if (message == "Decode") {
            timeToDecode = true;
            break;
        } else {
            message = message.split("|");
        }
        let type = message[0];
        let value1 = message[1];
        let value2 = message[2];
        switch (type) {
            case "Move":
                if (!(value1 > str.length - 1)) {
                    let toMove = str.splice(0, value1);
                    toMove.forEach(element => {
                        str.push(element);
                    });
                }
                break;
            case "Insert":
                if (value1 != -1) {
                    let v2arr = value2.split("");
                    if (v2arr.length == 1) {
                        str.splice(value1, 0, value2);
                    } else {
                        for (let i = v2arr.length - 1; i >= 0; i--) {
                            str.splice(value1, 0, v2arr[i]);
                        }
                    }
                }
                break;
            case "ChangeAll":
                while (str.includes(value1)) {
                    str = str.join("").replace(value1, value2).split("");
                }
                break;
        }
    }
    if (timeToDecode) {
        console.log(`The decrypted message is: ${str.join("")}`);
    }
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);