function replaceRepeatingChars(input) {
    let output = "";

    let previous = "";
    for (let char of input) {
        if (char != previous) {
            output += char;
            previous = char;
        }
    }
    console.log(output);

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');