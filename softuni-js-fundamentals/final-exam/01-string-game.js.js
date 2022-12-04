function stringGame(input) {
    let output = input.shift();
    let commands = input.splice(0);

    while (commands.length > 0) {
        let [command, v1, v2] = commands.shift().split(" ");
        switch (command) {
            case "Done": break;
            case "Change":
                let toReplace = v1;
                let replaceWith = v2;
                while (output.includes(toReplace)) {
                    output = output.replace(toReplace, replaceWith);
                }
                console.log(output);
                break;
            case "Includes":
                let checkFor = v1;
                console.log(output.includes(checkFor) ? "True" : "False");
                break;
            case "End":
                // let endsWith = v1;
                // let toPrint = false;
                // if (output.includes(endsWith)) {
                //     let endIndex = output.lastIndexOf(endsWith) + endsWith.length - 1;
                //     if (endIndex == output.length - 1) {
                //         toPrint = true;
                //     }
                // }
                // if (toPrint) {
                //     console.log("True");
                // } else {
                //     console.log("False");
                // }
                console.log(output.endsWith(v1) ? "True" : "False");
                break;
            case "Uppercase":
                output = output.toUpperCase();
                console.log(output);
                break;
            case "FindIndex":
                let findChar = v1;
                let findIndex = output.indexOf(findChar);
                // if (findIndex != -1) {
                // }
                console.log(findIndex);
                break;
            case "Cut":
                let startIndex = Number(v1);
                let count = Number(v2);
                let endIndex = startIndex + count;
                if (startIndex >= 0 && startIndex <= output.length - 1) {
                    // if (endIndex >= 0 && endIndex <= output.length - 1) {}
                    let cut = output.substring(startIndex, endIndex);
                    output = cut;
                    // cut = cut.split("");
                    // for (let char of cut) {
                    //     console.log(output);
                    //     output = output.split("").filter(a => a == char).join("");
                    // }
                    

                }
                console.log(output);
                break;
        }
    }
}
stringGame(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"]);
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"]);
// stringGame(["*S0ftUni is the B3St Plac3**",
//     "Change 0ft 333",
//     "Change 2 o",
//     "Includes best",
//     "End is",
//     "Uppercase",
//     "FindIndex P",
//     "Cut 3 7",
//     "Done"]);