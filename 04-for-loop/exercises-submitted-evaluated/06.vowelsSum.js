function vowelsSum(input) {
    let text = input[0];
    let length = text.length;
    let result = 0;
    let char = 0;

    for (let i = 0; i < length; i +=1) {
        char = text[i];
        if (char === "a") {
            result += 1;
        }
        if (char === "e") {
            result += 2;
        }
        if (char === "i") {
            result += 3;
        }
        if (char === "o") {
            result += 4;
        }
        if (char === "u") {
            result += 5;
        }
    }

    console.log(result);

}

vowelsSum(["hello"]);
vowelsSum(["hi"]);
vowelsSum(["bamboo"]);
vowelsSum(["beer"]);
