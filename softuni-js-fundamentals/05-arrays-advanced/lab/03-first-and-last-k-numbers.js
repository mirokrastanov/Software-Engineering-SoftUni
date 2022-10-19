function firstAndLastKNumbers(inputArr) {
    let takeAmount = Number(inputArr[0]);
    let workingArr = inputArr.slice();
    workingArr.shift();
    let firstElements = workingArr.slice(0, takeAmount);
    let lastElements = workingArr.slice((workingArr.length - takeAmount));
    console.log(firstElements.join(" "));
    console.log(lastElements.join(" "));


}

firstAndLastKNumbers([2, 7, 8, 9]);
// firstAndLastKNumbers([3, 6, 7, 8, 9]);