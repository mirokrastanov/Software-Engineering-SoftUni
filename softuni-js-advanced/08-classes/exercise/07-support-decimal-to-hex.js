function toHex(string) {
    if (typeof string == 'string') {
        const hexCode = { 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15, };
        let n = string.length;
        let result = 0;
        for (let i = 0; i < string.length; i++) {
            n--;
            let char = string[i];
            if (hexCode[char]) {
                char = hexCode[char];
            } else {
                char = Number(char);
            }
            result += (char * (16 ** n));
        }
        return result
    }
}

console.log(toHex('AAA'));
console.log(toHex('3B'));
console.log(toHex('E7A9'));