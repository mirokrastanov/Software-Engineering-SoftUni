function substring(word, text) {
    let splitArr = text.split(" ");
    let noMatch = true;

    for (let el of splitArr) {
        if (el.toLowerCase() == word.toLowerCase()) {
            noMatch = false;
            console.log(word);
            return;
        }
    }
    if (noMatch) {
        console.log(`${word} not found!`);
    }

}

substring('javascript',
    'JavaScript is the best programming language');
substring('python',
    'JavaScript is the best programming language');
