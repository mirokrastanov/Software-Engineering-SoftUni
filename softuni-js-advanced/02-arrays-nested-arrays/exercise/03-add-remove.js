function addRemove(input) {
    let outputArr = [];
    let counter = 0;

    while (input.length > 0) {
        counter++;
        let command = input.shift();
        switch (command) {
            case "add":
                outputArr.push(counter);
                break;
            case "remove":
                outputArr.pop();
                break;
        }
    }
    if (outputArr.length > 0) {
        console.log(outputArr.join(`\n`));
        // return outputArr.join(`\n`);
    } else {
        console.log("Empty");
        // return "Empty";
    }

}

// addRemove(['add',
//     'add',
//     'remove',
//     'add',
//     'add']);
addRemove(['remove',
    'remove',
    'remove']);