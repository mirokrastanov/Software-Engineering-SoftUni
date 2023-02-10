// const assert = require('assert').strict;
const solve = require('./01-sub-sum');

function test() {
    // Arrange
    let expected = 14;
    let numbers = [1, 2, 3, 4, 5, 6, 7];
    let startIndex = 1;
    let endIndex = 4;

    // Act
    let actual = solve(numbers, startIndex, endIndex);

    // Assert
    // assert.equal(actual, expected); // throws an error in the console if it doesn't match

    if (actual == expected) {
        console.log('correct');
    } else {
        console.log('Error!');
    }

}
test();


// console.log(solve([1, 2, 3, 4, 5, 6, 7], 1, 4));
