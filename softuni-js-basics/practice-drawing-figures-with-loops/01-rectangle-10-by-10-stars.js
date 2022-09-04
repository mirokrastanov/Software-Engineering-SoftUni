function stars() {
    for (let row = 1; row <= 10; row++) {
        let result = ""
        for (let col = 1; col <= 10; col++) {
            let star = "*"
            result += star
        }
        console.log(result);
    }

}
stars();