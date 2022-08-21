function charSeq(input) {
    let data = input[0];
    //if input[1] the variable "data" will contain the input with inxed "1", which is: "goshko" & "89123"
    
    let dataLen = data.length; 
    //OUTPUT is a number = the length of the variable "data" = 4 (because "4567" contains 4 characters)

    for (let i = 0; i < dataLen; i += 1){
      
        let singleCharacter = data[i]; 
        //Taking character number "i" from the variable "data". 
        //1st case: singleCharacter = data[0] = 4 (because from the input "4567", the character under index 0 is "4")

        console.log(singleCharacter);
    }

}

charSeq(["4567", "goshko "]);
charSeq(["ice cream", "89123"]);
