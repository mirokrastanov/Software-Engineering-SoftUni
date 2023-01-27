function createSortedList() {
    let numbers = [];
    return {
        add(num) {
            numbers.push(num);
            numbers = numbers.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < numbers.length && numbers.length > 0) {
                return numbers.splice(index, 1);
            }
        },
        get(index) {
            if (index >= 0 && index < numbers.length && numbers.length > 0) {
                return numbers[index];
            }
        },
        size() { return numbers.length; },
    };
}

// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
// console.log(list.size());



var myList = createSortedList();
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