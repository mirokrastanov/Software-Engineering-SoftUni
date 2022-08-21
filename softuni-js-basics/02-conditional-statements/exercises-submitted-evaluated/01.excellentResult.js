function excellentResult(input) {
    let grade = Number(input[0]);
    
    if(grade >= 5.50) {
        console.log("Excellent!");
    }
}

excellentResult(["4"]);    //No Output, because the result of the if condition is FALSE.
excellentResult(["5.50"]); //Excellent!
excellentResult(["6"]);    //Excellent!
