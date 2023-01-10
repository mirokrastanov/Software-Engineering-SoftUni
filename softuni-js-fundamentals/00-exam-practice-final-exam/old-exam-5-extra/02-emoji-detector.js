function emojiDetector(input) {
    let key = input[0];
    let cool = /[0-9]/g;
    let coolFound = key.match(cool);
    let coolThreshold = coolFound.map(Number).reduce((a, b) => a * b);

    let regex = /(?<d1>[:*])(\k<d1>)(?<emoji>[A-Z][a-z]{2,})(\k<d1>)(\k<d1>)/g;
    let found = key.matchAll(regex);
    let emojies = {};
    let coolEmojies = {};

    for (const el of found) {
        let current = el.groups.emoji;
        emojies[current] = el[0];
        let value = 0;
        for (let i = 0; i < current.length; i++) {
            value += current.charCodeAt(i);
        }
        if (value >= coolThreshold) {
            coolEmojies[current] = el[0];
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${(Object.keys(emojies).length)} emojis found in the text. The cool ones are:`);
    for (const [v1, v2] of Object.entries(coolEmojies)) {
        console.log(v2);
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);