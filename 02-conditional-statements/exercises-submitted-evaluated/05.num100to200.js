function num100to200(input) {
    let num1 = Number(input[0]);

    if (num1 < 100) {
        console.log("Less than 100");
    } else if (num1 >= 100) {
        if (num1 > 200) {
            console.log("Greater than 200");
        } else {
            console.log("Between 100 and 200")
        }
    }   
}

num100to200(["95"]);
num100to200(["120"]);
num100to200(["210"]);
