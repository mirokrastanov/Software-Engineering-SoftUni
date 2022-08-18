function multiplyBy2(input) {

    // after I learn loops, try again

    for (let i = 0; i < 100; i++) {
        let n = Number(input[i]);
        if (isNaN(n)) {
            break;
        }
        let result = n * 2;
        if (n >= 0) {
            console.log(`Result: ${result.toFixed(2)}`);
        } else {
            console.log("Negative number!");
        }
    }

}

multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20", "23.43", "12.3245", "0", "65.23432", "23", "65", "-12", "-123"]);
