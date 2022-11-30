function mirrorWords(input) {
    let word = input.slice().join("");
    let regExp = /(?<delim1>[@#])(?<word1>[A-Za-z][A-Za-z][A-Za-z]+)(\k<delim1>{2})(?<word2>[A-Za-z][A-Za-z][A-Za-z]+)(\k<delim1>)/g;
    let extractedRaw = word.matchAll(regExp);
    let extractedArray = [];
    let palindromes = [];

    for (let el of extractedRaw) {
        let match = {
            word1: el.groups.word1,
            word2: el.groups.word2,
        };
        extractedArray.push(match);
    }

    for (let el of extractedArray) {
        let word1 = el.word1;
        let word2 = el.word2;
        let isPalindrome = checkPalindrome(word1, word2);
        if (isPalindrome) {
            palindromes.push(el);
        }
    }

    if (extractedArray.length < 1) {
        console.log("No word pairs found!");
    } else {
        console.log(`${extractedArray.length} word pairs found!`);
    }

    if (palindromes.length < 1) {
        console.log("No mirror words!");
    } else {
        let output = "";
        for (let el of palindromes) {
            output += `${el.word1} <=> ${el.word2}, `;
        }
        output = output.substring(0, output.length - 2);
        console.log("The mirror words are:");
        console.log(output);
    }

    function checkPalindrome(word1, word2) {
        let rev2 = word2.split("").reverse().join("");
        return rev2 == word1;
    }
    // console.log("--");
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);