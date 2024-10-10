// name: 

/*
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr1
 *  2. INTEGER_ARRAY arr2
 */

function minimumMoves(arr1, arr2) {
    let totalMoves = 0; 

    for (let i = 0; i < arr1.length; i++) {
        const num1 = arr1[i].toString();
        const num2 = arr2[i].toString();

        const maxLength = Math.max(num1.length, num2.length);

        const paddedNum1 = num1.padStart(maxLength, '0');
        const paddedNum2 = num2.padStart(maxLength, '0');

        for (let j = 0; j < maxLength; j++) {
            const digit1 = Number(paddedNum1[j]);
            const digit2 = Number(paddedNum2[j]);
            const diff = Math.abs(digit1 - digit2);

            if (digit1 <= digit2) {
                totalMoves += diff; 
            } else {
                totalMoves += diff; 
            }
        }
    }

    return totalMoves; 
}

// Example usage:
const arr1 = [1234, 4321];
const arr2 = [4321, 2345];
console.log(minimumMoves(arr1, arr2)); // Output: 10
