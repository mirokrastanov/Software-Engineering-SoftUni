function list(input) {
    let sorted = input.sort((a,b) => a.localeCompare(b));
    let counter = 0;
    sorted.forEach(element => {
        counter++;
        console.log(`${counter}.${element}`);
    });
    
}

list(["John", "Bob", "Christina", "Ema"]);