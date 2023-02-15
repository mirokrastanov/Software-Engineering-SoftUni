class Hex {
    constructor(value) {
        this.value = value;
        this.hex = this.returnHexValue(value);
    }
    valueOf() {
        return this.value;
    }
    returnHexValue(value) {
        if (typeof value != 'number' && value) {
            return value;
        }
        let output = "";
        let hexValue = [];
        const hexCode = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F', };
        let initial = value == undefined ? Number(this.value) : value;
        if (initial == 0) {
            output = '0';
        } else {
            while (initial > 0) {
                let remainder = initial % 16;
                initial = Math.floor(initial / 16);
                if (remainder > 9) {
                    remainder = hexCode[remainder];
                }
                hexValue.push(remainder);
            }
            let hexFinal = hexValue.reverse().join("");
            output = hexFinal;
        }
        return output;
    }
    returnDecimalValue(string) {
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
    toString() {
        return '0x' + this.hex;
    }
    plus(input) {
        let result = '0x';
        if (typeof input == 'number') {
            result += this.returnHexValue(this.value + input);
        } else {
            result += this.returnHexValue(this.value + input.value);
        }
        return result;
    }
    minus(input) {
        let result = '0x';
        if (typeof input == 'number') {
            result += this.returnHexValue(this.value - input);
        } else {
            result += this.returnHexValue(this.value - input.value);
        }
        return result;
    }
    parse(input) {
        return this.returnDecimalValue(input);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));