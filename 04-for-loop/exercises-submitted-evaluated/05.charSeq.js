function charSeq(input) {
    let text = input[0];
    let textLength = text.length;

    for (let i = 0; i < textLength; i += 1) {
        let letter = text[i];
        console.log(letter);
    }

}

charSeq(["softuni"]);
charSeq(["ice cream"]);
