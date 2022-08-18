function maxNum(input) {
    let index = 0;
    let number = input[index];
    let highest = Number(number);

    while (String(number) !== "Stop") {
        if (number > highest) {
            highest = Number(number);
        }
        index++
        number = input[index];
    }
    console.log(highest);
}

maxNum(["100",
"99",
"80",
"70",
"Stop"]);
maxNum(["-10",
"20",
"-30",
"Stop"]);
maxNum(["45",
"-20",
"7",
"99",
"Stop"]);
maxNum(["999",
"Stop"]);
maxNum(["-1",
"-2",
"Stop"]);





