function evenPosEl(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            output.push(input[i]);
        }
    }
    console.log(output.join(" "));
}

evenPosEl(['20', '30', '40', '50', '60']);