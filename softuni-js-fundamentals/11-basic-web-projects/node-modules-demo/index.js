const calculate = require('./calculator');
// import calculate from './calculator';
// alternative way to IMPORT

let firstNum = 10;
let secondNum = 20;

let result = calculate(firstNum, secondNum);

console.log(result.sum);
console.log(result.multiply);