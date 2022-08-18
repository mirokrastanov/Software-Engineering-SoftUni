function testBooleans() {
    let a = "5";
    let b = 5;
    let c = 10;
    let isValid = a === b; 

    console.log(a === b);
    console.log(a == b);
    console.log(a !== b);
    console.log(a != b);
    console.log(c == a * 2);
    console.log(c === a * 2);
    console.log(c === a + 5);
    console.log(c <= a * 2);
    console.log(isValid);


}

testBooleans();
