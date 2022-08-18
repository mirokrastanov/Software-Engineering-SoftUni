function excellent(input) {
    let grade = Number(input[0]);
    
    if(grade >= 5.50) {
        console.log("Excellent!");
    }
}

excellent(["4"]);    //No Output, because the result of the if condition is FALSE.
excellent(["5.50"]); //Excellent!
excellent(["6"]);    //Excellent!
