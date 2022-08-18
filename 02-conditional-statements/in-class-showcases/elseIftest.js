function elseIfTest(input) {
    let a = Number(input[0]);
    if (a > 4) {
        console.log("Greater than 4");
    } else if (a > 5) {
        console.log("Greater than 5");
    } else {
        console.log("Equal to 7");
    }
}
elseIfTest(["7"]);