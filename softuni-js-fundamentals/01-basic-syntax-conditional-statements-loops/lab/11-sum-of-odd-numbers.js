function sumOfOddNumbers(numbers) {
    let sum = 0;
    let oddCounter = 1;
    let num = 1;
    while (oddCounter <= numbers) {
        console.log(num);
        sum += num;
        num += 2;
        oddCounter++;
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);