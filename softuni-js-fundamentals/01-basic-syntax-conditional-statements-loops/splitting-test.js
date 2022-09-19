function splitJoin(input) {
    let splitArray = input.split("T");
    let firstName = splitArray[0];
    let lastName = splitArray[1];
    console.log(`This is ${firstName} ${lastName}.`);

}

splitJoin("PeshoTNikolov");