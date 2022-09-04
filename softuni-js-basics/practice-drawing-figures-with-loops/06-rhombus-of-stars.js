function rhombusOfStars(input) {
    let n = Number(input);
    for (let row = 1; row <= n; row++) {
        let result = "";
        for (let empty = 1; empty <= n - row; empty++) {
            result += " "
        }
        result += "*"
        for (let star = 1; star <= row - 1; star++){
            result += " *"
        }
        console.log(result);
    }
    for (let row = n - 1; row >= 1; row--) {
        let result = "";
        for (let empty = 1; empty <= n - row; empty++) {
            result += " "
        }
        result += "*"
        for (let star = 1; star <= row - 1; star++){
            result += " *"
        }
        console.log(result);
    }

}

rhombusOfStars(["4"]);
