function starsNbyN(input) {
    let n = Number(input);
    for (let row = 1; row <= n; row++) {
        let result = ""
        for (let col = 1; col <= n; col++) {
            let star = "*"
            result += star
        }
        console.log(result);
    }

}

starsNbyN(["2"]);
