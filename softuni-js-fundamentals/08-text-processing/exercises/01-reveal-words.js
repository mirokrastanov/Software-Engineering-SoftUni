function revealWords(str1, str2) {
    let lookFor = str1.split(", ").sort((a, b) => b.length - a.length);
    let lookInside = str2;

    lookFor.forEach(word => {
        let wordLength = word.length;
        let matchIndex = lookInside.indexOf("*");
        let templateWord = "";
        for (let i = 0; i < wordLength; i++) {
            templateWord += "*";
        }
        lookInside = lookInside.replace(templateWord, word);
        
    });

    console.log(lookInside);

}

revealWords('great',
    'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');