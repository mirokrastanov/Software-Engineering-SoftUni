function concatenateData(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];
    let res = `You are ${firstName} ${lastName}, a ${age}-year old person from ${town}`
    console.log(res);
}

concatenateData(["Petar", "Petrov", "24", "Sofia"])
