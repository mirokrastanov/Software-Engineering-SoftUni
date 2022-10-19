function processOddNumbers(inputArr) {
    let oddArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 != 0) {
            let current = inputArr[i] * 2;
            oddArr.push(current);
        }
    }    
    oddArr.reverse();
    console.log(oddArr.join(" "));

}

processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);