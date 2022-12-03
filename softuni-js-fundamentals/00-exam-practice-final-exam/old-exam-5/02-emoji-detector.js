function emojiDetector(input) {
    let threshold = input[0].match(/\d/g).reduce((a,b) => a * b);
    let regExp = /(?<del1>[:*])(\k<del1>)(?<emoji>[A-Z][a-z]{2,})(\k<del1>)(\k<del1>)/g;
    let matches = input[0].matchAll(regExp);
    let emojies = [];
    let cool = [];
    for (let match of matches) {
        let emoji = match.groups.emoji;
        let rawEmoji = match[0];
        emojies.push(emoji);
        let coolness = emoji.split("").map(a => a.charCodeAt()).reduce((a, b) => a + b);
        if (coolness >= threshold) {
            cool.push(rawEmoji);
        }    
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojies.length} emojis found in the text. The cool ones are:`);
    cool.forEach(element => {
        console.log(element);
    });
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);