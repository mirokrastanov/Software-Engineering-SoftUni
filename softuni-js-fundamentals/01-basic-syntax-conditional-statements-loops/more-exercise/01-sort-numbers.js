function sortNumbers(num1, num2, num3) {
    let greatestNum = Number.MIN_SAFE_INTEGER;
    let smallestNum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arguments.length; i++) {
        let currentNum = Number(arguments[i]);
        if (currentNum > greatestNum) {
            greatestNum = currentNum;
        }
        if (currentNum < smallestNum) {
            smallestNum = currentNum;
        }
    }
    let numArray = [num1, num2, num3];
    let sortArray = numArray.sort((a,b)=>(b-a));
    for (let i = 0; i < arguments.length; i++) {
        console.log(sortArray[i]);
    }
    
}

sortNumbers(
    -2,
    1,
    3
);
sortNumbers(
    2,
    0,
    0
);