function minNum(input) {
    let index = 0;
    let number = input[index];
    let lowest = Number(number);
    while (String(number) !== "Stop") {
        if (Number(number) < lowest) {
            lowest = Number(number);
        }
        index++;
        number = input[index]; 
    }
    console.log(lowest);
}


minNum(["100",
"99",
"80",
"70",
"Stop"]);
minNum(["-10",
"20",
"-30",
"Stop"]);
minNum(["45",
"-20",
"7",
"99",
"Stop"]);
minNum(["999",
"Stop"]);
minNum(["-1",
"-2",
"Stop"]);
