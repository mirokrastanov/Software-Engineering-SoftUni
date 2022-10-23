function coffeeLover(inputArr) {
    let workingArr = inputArr.slice();
    let coffeeList = workingArr.shift().split(" ");
    let commandsCount = Number(workingArr.shift());
    let commands = workingArr.splice(0);

    while (commands.length > 0) {
        let command = commands.shift().split(" ");
        let type = command.shift();
        let value1 = command.shift();
        let value2 = Number(command.shift());
        switch (type) {
            case "Include":
                coffeeList.push(value1);
                break;
            case "Remove":
                switch (value1) {
                    case "first":
                        if (!(value2 > coffeeList.length || value2 < 1)) {
                            coffeeList.splice(0, value2)
                        }
                        break;
                    case "last":
                        if (!(value2 > coffeeList.length || value2 < 1)) {
                            coffeeList.splice((coffeeList.length - value2));
                        }
                        break;
                }
                break;
            case "Prefer":
                value1 = Number(value1);
                if (value1 >= 0 && value1 < coffeeList.length && value2 >= 0 && value2 < coffeeList.length) {
                    let temp = coffeeList[value2];
                    coffeeList.splice(value2, 1, coffeeList[value1]);
                    coffeeList.splice(value1, 1, temp);
                }
                break;
            case "Reverse":
                coffeeList.reverse();
                break;
        }
    }
    console.log("Coffees:");
    console.log(coffeeList.join(" "));

}

coffeeLover([
    "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"
]);
coffeeLover([
    "Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"
]);
