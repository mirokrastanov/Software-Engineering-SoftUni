function passwordGenerator(input) {
    let word = input[2].split("");
    let wordLength = word.length;
    let longStr1 = input[0];
    let longStr2 = input[1];
    let password = longStr1.concat(longStr2).split("");
    
    function isVowel(char) {
        let uniChar = char.toLowerCase();
        let output = uniChar == "a" || uniChar == "o" || uniChar == "e" || uniChar == "i" || uniChar == "u";
        return output;
    }

    let counter = 0;
    for (let i = 0; i < password.length; i++) {
        if (counter == wordLength) {
            counter = 0;
        }
        if (isVowel(password[i])) {
            password[i] = word[counter].toUpperCase();
            counter++;
        }
    }

    password = password.reverse().join("");
    console.log(`Your generated password is ${password}`);
}

passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);