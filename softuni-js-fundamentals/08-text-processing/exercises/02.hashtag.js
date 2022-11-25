function hashtag(input) {
    let words = input.split(" ");

    words.forEach(word => {
        if (word[0] == "#" && word.length != 1) {
            let eligible = true;
            let result = "";
            for (let i = 1; i < word.length; i++) {
                let char = word[i];
                result += char;
                if (!((char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122))) {
                    eligible = false;
                }                
            }
            if (eligible) {
                console.log(result);
            }
        }   
    });

}
hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign');