function averageNumber(input) {
    let index = 0;
    let numCounter = 0;
    let sum = 0;
    let numbers = Number(input[index]);
    index++;
    let num = Number(input[index]);
    index++;
    numCounter++;
    
    while (numCounter <= numbers) {
        sum += num;

        num = Number(input[index]);
        index++;
        numCounter++;
    }
    numCounter--;
    let avgNum = sum / numCounter;
    console.log(avgNum.toFixed(2));

}

averageNumber([
    '4',
    '3',
    '2',
    '4',
    '2'
]);
averageNumber([
    '2',
    '6',
    '4'
]);
averageNumber([
    '3',
    '82',
    '43',
    '22'
]);
averageNumber([
    '4',
    '95',
    '23',
    '76',
    '23'
])