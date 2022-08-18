function readText(input) {
    let i = 0;
    let element = input[i];

    while (element != "Stop") {
        if (i < input.length) {
            console.log(element);
            i++;
            element = input[i];
        } else {
            break;
        }
    }

}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"]);

