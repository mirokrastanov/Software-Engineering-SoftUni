(function () {
    String.prototype.ensureStart = function (str) {
        return !this.startsWith(str) ? str.concat(this) : String(this);
    }
    String.prototype.ensureEnd = function (str) {
        return !this.endsWith(str) ? this.concat(str) : String(this);
    }
    String.prototype.isEmpty = function () {
        return this.length == 0;
    }
    String.prototype.truncate = function (n) {
        if (n < 4) return '.'.repeat(n);
        if (String(this).length <= n) return String(this);
        else {
            let output = String(this).substring(0, n - 2);
            if (output.lastIndexOf(' ') != -1) return output.substring(0, output.lastIndexOf(' ')) + '...';
            return output.substring(0, n - 3) + '...';
        }
    }
    String.format = function (string, ...params) {
        let output = '';
        let next = false;
        for (const letter of string.split('')) {
            if (letter == '{') next = true;
            if (letter == '{' || letter == '}') continue;
            if (next) {
                if (params[Number(letter)]) output += params[Number(letter)];
                else output += `{${letter}}`;
                next = false;
                continue;
            }
            output += letter;
        }
        return output;
    }
})();


let str = 'my string';
console.log(str, ' - ', 'my string');
str = str.ensureStart('my');
console.log(str, ' - ', 'my string');
str = str.ensureStart('hello ');
console.log(str, ' - ', 'hello my string');
console.log(str.ensureEnd('string')); // works
console.log(str.isEmpty()); // works
console.log(''.isEmpty()); // works
str = str.truncate(16);
console.log(str, ' - ', 'hello my string');
str = str.truncate(14);
console.log(str, ' - ', 'hello my...');
str = str.truncate(8);
console.log(str, ' - ', 'hello...');
str = str.truncate(4);
console.log(str, ' - ', 'h...');
str = str.truncate(2);
console.log(str, ' - ', '..');
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str, ' - ', 'The quick brown fox');
str = String.format('jumps {0} {1}', 'dog');
console.log(str, ' - ', 'jumps dog {1}');