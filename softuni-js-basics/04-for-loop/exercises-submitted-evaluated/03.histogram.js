function histogram(input) {
    let n = 0;
    let n0 = Number(input[0]);
    let nQuantity = input.length;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (i = 1; i < nQuantity; i++) {
        n = Number(input[i]);
        if (n < 200) {
            p1 += 1;
        } else if (n >= 200 && n <= 399) {
            p2 += 1;
        } else if (n >= 400 && n <= 599) {
            p3 += 1;
        } else if (n >= 600 && n <= 799) {
            p4 += 1;
        } else if (n >= 800) {
            p5 += 1;
        }
    }
    p1 = p1 / n0 * 100;
    p2 = p2 / n0 * 100;
    p3 = p3 / n0 * 100;
    p4 = p4 / n0 * 100;
    p5 = p5 / n0 * 100;
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

histogram(["3",
"1",
"2",
"999"]);
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"]);
histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"]);
histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"]);




