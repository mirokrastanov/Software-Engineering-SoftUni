function charactersInRange(char1, char2) {
    let start = String(char1).charCodeAt();
    let end = String(char2).charCodeAt();
    if (end < start) {
        let temp = end;
        end = start;
        start = temp;
    }
    let result = '';
    for (let i = start + 1; i < end; i++) {
        if (i == end) {
            result += String.fromCharCode(i);
        } else {
            result += String.fromCharCode(i) + ' ';
        }
    }
    console.log(result);
}
charactersInRange('#', ':');