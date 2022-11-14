function oddOccurences(input) {
    let strings = input.split(" ");
    let output = new Set();
    let buffer = "";

    for (let i = 0; i < strings.length; i++) {
        let counter = 0;
        let current = strings[i].toLowerCase();
        if (output.hasOwnProperty(current)) {
            continue;
        }
        for (let j = 0; j < strings.length; j++) {
            if (i == j) {
                continue;
            }
            let toCompare = strings[j].toLowerCase();
            if (toCompare == current) {
                counter++;
            }
        }
        if (counter % 2 == 0) {
            output.add(current);
        }
    }

    for (let el of output) {
        buffer += `${el} `;
    }

    console.log(buffer);

}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');