function activationKeys(input) {
    let key = input.shift();
    let commands = input.splice(0);

    while (commands.length > 0) {
        let command = commands.shift();
        if (command != "Generate") {
            let [type, v1, v2, v3] = command.split(">>>");
            switch (type) {
                case "Contains":
                    let ifContains = v1;
                    if (key.includes(ifContains)) {
                        console.log(`${key} contains ${ifContains}`);
                    } else {
                        console.log("Substring not found!");
                    }
                    break;
                case "Flip":
                    let flipTo = v1;
                    let flipStart = Number(v2);
                    let flipEnd = Number(v3);
                    let temp = flipStart;
                    if (flipStart >= flipEnd) {
                        flipStart = flipEnd;
                        flipEnd = temp;
                    }
                    if (flipEnd >= 0 && flipEnd < key.length && flipStart >= 0 && flipStart < key.length) {
                        let flipString = key.substring(flipStart, flipEnd);
                        let keyEnd = key.substring(flipEnd);
                        let keyStart = key.substring(0, flipStart);
                        switch (flipTo) {
                            case "Upper":
                                flipString = flipString.toUpperCase();
                                key = keyStart + flipString + keyEnd;
                                console.log(key);
                                break;
                            case "Lower":
                                flipString = flipString.toLowerCase();
                                key = keyStart + flipString + keyEnd;
                                console.log(key);
                                break;
                        }
                    }
                    break;
                case "Slice":
                    let sliceStart = Number(v1);
                    let sliceEnd = Number(v2);
                    let tempSlice = sliceStart;
                    if (sliceStart >= sliceEnd) {
                        sliceStart = sliceEnd;
                        sliceEnd = temp;
                    }
                    let slice1 = key.substring(0, sliceStart);
                    let slice2 = key.substring(sliceEnd);
                    key = slice1 + slice2;
                    console.log(key);
                    break;
            }
        } else {
            console.log(`Your activation key is: ${key}`);
        }
    }
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);