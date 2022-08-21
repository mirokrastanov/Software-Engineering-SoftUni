function roundNumber(input) {
    let num = Number(input[0]);
    console.log(num.toFixed(1));

}
roundNumber(["3.25"]); //3.3
roundNumber(["3.15"]); //3.1 - THIS IS AN EXCEPTION. Weird... 
roundNumber(["3.26"]); //3.3
roundNumber(["3.24"]); //3.2
