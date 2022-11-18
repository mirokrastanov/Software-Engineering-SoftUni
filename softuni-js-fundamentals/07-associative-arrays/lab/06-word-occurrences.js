function wordOccurrences(input) {
    let words = new Map();

    input.forEach(word => {
        if (words.has(word)) {
            let value = words.get(word) + 1;
            words.set(word, value);
        } else {
            words.set(word, 1);
        }
    });

    let sorted = Object.entries(Object.fromEntries(words)).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here",
    "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);