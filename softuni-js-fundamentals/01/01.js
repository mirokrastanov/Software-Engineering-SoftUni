function solve(input) {
    let helloWorld = input;
    let final = "";
    for (let i = 0; i < helloWorld.length; i++) {
        let letter = helloWorld[i];
        final += letter;
    }
    console.log(final);

}

solve("Hello World");