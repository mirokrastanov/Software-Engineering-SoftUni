function pascalCaseSplitter(input) {
    let outputArr = [];
    let word = "";
    for (let i = 0; i <= input.length; i++) {
        let char = input[i];
        if (!char) {
            outputArr.push(word);
            break;
        }
        if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
            if (word != "") {
                outputArr.push(word);
            }
            word = "";
            word += char;
        } else {
            word += char;
        }
    }
    console.log(outputArr.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
