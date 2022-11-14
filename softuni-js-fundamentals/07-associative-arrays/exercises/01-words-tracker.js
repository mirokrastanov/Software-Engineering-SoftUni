function wordsTracker(input) {
    let words = input.slice();
    let targets = words.shift().split(" ");
    let occurrences = {};


    for (let target of targets) {
        occurrences[target] = 0;
        for (let word of words) {
            if (word == target) {
                occurrences[target]++;
            }
        }
    }
    
    let sorted = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }

}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurrences', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because',
    'this', 'is', 'your', 'task']);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);