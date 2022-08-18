function sumNumbers(input) {
    let number = Number(input[0]);
    let index = 1;
    let addNumber = Number(input[index]);
    let sum = addNumber;
    while (sum < number) {
        index++;
        addNumber = Number(input[index]);
        sum += addNumber;
    } 
    console.log(sum);

}

sumNumbers(["100",
"10",
"20",
"30",
"40"]);
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);

