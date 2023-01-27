function result() {
    const numbers = [];
    const operations = {
        add,
        remove,
        get,
        size: 0, // this was the issue with the unit tests - somehow it cannot take numbers.length's current state as correct
        // therefore the this.size++/-- hack is required to work around that issue in JUDGE's unit tests
    };
    return operations;

    function add(num) {
        if (typeof num == 'number') {
            numbers.push(num)
            this.size++;
            numbers.sort((a, b) => a - b);
        }
    };
    function remove(index) {
        if (isValid(index)) {
            numbers.splice(index, 1);
            this.size--;
        }
    };
    function get(index) {
        if (isValid(index)) {
            return numbers[index];
        }
    };
    function isValid(index) {
        return index >= 0 && index < numbers.length;
    }
}

var myList = result();
console.log(myList.hasOwnProperty('size'));

// Generate random list of 20 numbers
var expectedArray = [];
for (let i = 0; i < 20; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}
// Add to collection
for (let i = 0; i < expectedArray.length; i++) {
    myList.add(expectedArray[i]);
}
console.log(myList.size);
// Sort array
expectedArray.sort((a, b) => a - b);
// Compare with collection
for (let i = 0; i < expectedArray.length; i++) {
    console.log(myList.get(i), expectedArray[i]);
}