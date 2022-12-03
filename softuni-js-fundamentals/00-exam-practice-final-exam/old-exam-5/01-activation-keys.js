function activationKeys(input) {
    let activationKey = input.shift();
    let operations = input.splice(0);

    while (operations.length > 0) {
        let [command, v1, v2, v3] = operations.shift().split(">>>");
        switch (command) {
            case "Generate":
                console.log(`Your activation key is: ${activationKey}`);
                break;
            case "Contains":
                let lookFor = v1;
                if (activationKey.includes(lookFor)) {
                    console.log(`${activationKey} contains ${lookFor}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case "Flip":
                let flipTo = v1;
                let startIndex = Number(v2);
                let endIndex = Number(v3);
                startIndex = startIndex < endIndex ? startIndex : endIndex;
                endIndex = startIndex == endIndex ? Number(v2) : endIndex;
                let subStart = activationKey.substring(0, startIndex);
                let subEnd = activationKey.substring(endIndex);
                let chosenStr = activationKey.substring(startIndex, endIndex);
                switch (flipTo) {
                    case "Upper": chosenStr = chosenStr.toUpperCase(); break;
                    case "Lower": chosenStr = chosenStr.toLowerCase(); break;
                }
                activationKey = subStart + chosenStr + subEnd;
                console.log(activationKey);
                break;
            case "Slice":
                let deleteFrom = Number(v1);
                let deleteTo = Number(v2);
                deleteFrom = deleteFrom < deleteTo ? deleteFrom : deleteTo;
                deleteTo = deleteFrom == deleteTo ? Number(v1) : deleteTo;
                let start = activationKey.substring(0, deleteFrom);
                let end = activationKey.substring(deleteTo);
                activationKey = start + end;
                console.log(activationKey);                
                break;
        }
    }
}

activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]));
activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]));