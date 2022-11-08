function mathPower(input) {
    input = input.map(Number);
    let number = input[0];
    let power = input[1];
    let result = Math.pow(number, power);
    console.log(result);
}

// mathPower(2, 8);
mathPower(["2", "8"]);
