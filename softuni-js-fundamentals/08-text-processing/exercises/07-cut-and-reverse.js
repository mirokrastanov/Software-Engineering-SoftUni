function cutAndReverse(input) {
    
    let output = "";
    for (let i = 0; i < Math.floor(input.length / 2); i++) {
        output += input[i];
    }
    let reverse1 = output.split("").reverse().join("");
    console.log(reverse1);
    let output2 = input.split(output);
    let reverse2 = output2.pop().split("").reverse().join("");
    console.log(reverse2);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');