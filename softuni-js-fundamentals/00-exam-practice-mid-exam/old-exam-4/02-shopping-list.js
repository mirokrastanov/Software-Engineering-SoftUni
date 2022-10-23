function shoppingList(inputArr) {
    let workingArr = inputArr.slice();
    let list = workingArr.shift().split("!");
    let commands = workingArr.splice(0);
    let finish = false;

    while (commands.length > 0) {
        let command = commands.shift().split(" ");
        let type = command.shift();
        let item1 = command.shift();
        let item2 = command.shift();
        switch (type) {
            case "Urgent":
                if (!list.includes(item1)) {
                    list.unshift(item1)
                }
                break;
            case "Unnecessary":
                if (list.includes(item1)) {
                    list = list.filter(a => a != item1);
                }
                break;
            case "Correct":
                if (list.includes(item1)) {
                    let removeAt = list.indexOf(item1);
                    list.splice(removeAt, 1, item2);
                }
                break;
            case "Rearrange":
                if (list.includes(item1)) {
                    let findAt = list.indexOf(item1);
                    list.splice(findAt, 1);
                    list.push(item1);
                }
                break;
            case "Go":
                finish = true;
                break;
        }
        if (finish) {
            break;
        }
    }
    console.log(list.join(", "));

}

shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);
shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);