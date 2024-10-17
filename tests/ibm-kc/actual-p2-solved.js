// SOLVED IN: 22min | ALLOWED TIME (for both tasks): 1h 


/*
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr1
 *  2. INTEGER_ARRAY arr2
 */

function minimumMoves(arr1, arr2) {
    let moves = 0;

    for (let i = 0; i < arr1.length; i++) {
        const one = String(arr1[i]).split('');
        const two = String(arr2[i]).split('');
        for (let j = 0; j < one.length; j++) {
            const fromOne = Number(one[j]);
            const fromTwo = Number(two[j]);
            const diff = Math.abs(fromOne - fromTwo);
            moves += diff;            
        }        
    }

    return moves;
}

// Examples
const arr1 = [1234, 4321];
const arr2 = [2345, 3214];
// Expected Output: 10
console.log(minimumMoves(arr1, arr2)); 

// Examples
const arr3 = [2468];
const arr4 = [8642];
// Expected Output: 16
console.log(minimumMoves(arr3, arr4)); 

