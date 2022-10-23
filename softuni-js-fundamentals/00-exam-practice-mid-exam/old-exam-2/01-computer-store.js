function computerStore(inputArr) {
    let workingArr = inputArr.slice();
    let parts = [];
    let total = 0;
    let invalid = false;
    let special = false;

    while (workingArr.length > 0) {
        let command = workingArr.shift();
        if (command != Number(command)) {
            if (parts.length == 0) {
                invalid = true;
                break;
            }
            if (command == "special") {
                special = true;
            }
        } else {
            let partPrice = Number(command); 
            if (partPrice <= 0) {
                console.log("Invalid price!");
                continue;
            }
            parts.push(partPrice);
        }
    }
    if (parts.length == 0) {
        invalid = true;
    } else {
        total = parts.reduce((a, b) => a + b);
    }
    let taxed = total * 1.2;
    if (special) {
        taxed *= 0.9;
    }
    
    if (invalid) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${total.toFixed(2)}$`);
        console.log(`Taxes: ${(total * 0.2).toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${taxed.toFixed(2)}$`);
    }

}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
computerStore(['regular']);