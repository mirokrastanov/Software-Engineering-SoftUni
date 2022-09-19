function solve(input) {
    let final = "";
    for (let i = input.length - 1; i >= 0; i--) {
        let letter = input[i];
        final += letter;
    }
    console.log(final);
}

solve("Hello");