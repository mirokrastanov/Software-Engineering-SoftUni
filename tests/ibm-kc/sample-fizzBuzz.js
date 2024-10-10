/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */


// personal notes
// i is a multiple of both 3 and 5, print FizzBuzz
// i is a multiple of 3 (but not 5), print Fizz
// i is a multiple of 5 (but not 3), print Buzz
// otherwise, print the number itself

function fizzBuzz(n) {
    function checkNum(num) {
        if (num % 3 == 0 && num % 5 == 0) return 'FizzBuzz';
        if (num % 3 == 0) return 'Fizz';
        if (num % 5 == 0) return 'Buzz';
        return String(num);
    }
    let resArr = [];

    for (let i = 1; i <= n; i++) {
        resArr.push(checkNum(i));
    }

    return console.log(resArr.join('\n'));
}

// console.log(fizzBuzz(15));
fizzBuzz(15);