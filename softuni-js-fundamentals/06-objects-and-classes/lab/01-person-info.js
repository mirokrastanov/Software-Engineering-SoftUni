function personInfo(input) {
    let person = {
        firstName: input[0],
        lastName: input[1],
        age: input[2],
    };

    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

personInfo(["Peter", "Pan", "20"]);
personInfo(["George", "Smith", "18"]);