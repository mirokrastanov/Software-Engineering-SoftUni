function oddAndEvenSum(num) {
    let numAsStr = String(num);
    let oddArr = [];
    let evenArr = [];

    for (let i = 0; i < numAsStr.length; i++) {
        let currentDigit = Number(numAsStr[i]);
        if (currentDigit % 2 == 0) {
            evenArr.push(numAsStr[i]);
        } else {
            oddArr.push(numAsStr[i]);
        }
    }

    let sum = function (inputArr) {
        let result = 0;
        for (let i = 0; i < inputArr.length; i++) {
            result += Number(inputArr[i]);
        }
        return result;
    };

    let oddSum = sum(oddArr);
    let evenSum = sum(evenArr);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(3495892137259234);
oddAndEvenSum(1000435);