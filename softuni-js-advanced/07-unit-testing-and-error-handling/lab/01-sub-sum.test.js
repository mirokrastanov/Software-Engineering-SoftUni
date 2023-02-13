const assert = require('assert').strict;
const solve = require('./01-sub-sum');

describe('Sub-sum Calculator', () => {
    it('Should calculate sub-sum when end index is larger than length', () => {
        // Arrange
        let expected = 14;
        let numbers = [1, 2, 3, 4, 5, 6, 7];
        let startIndex = 1;
        let endIndex = 4;
        // Act
        let actual = solve(numbers, startIndex, endIndex);
        // Assert
        assert.equal(actual, expected); // throws an error in the console if it doesn't match
    });
    it('Should calculate sub-sum when start index is less than 0', () => {
        // Arrange
        let expected = 60;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = -100;
        let endIndex = 2;
        // Act
        let actual = solve(numbers, startIndex, endIndex);
        // Assert
        assert.equal(actual, expected); // throws an error in the console if it doesn't match
    });
});