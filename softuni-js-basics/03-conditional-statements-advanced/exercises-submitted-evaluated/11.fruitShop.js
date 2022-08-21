function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let total = 0;
    let banana = 0;
    let apple = 0;
    let orange = 0;
    let grapefruit = 0;
    let kiwi = 0;
    let pineapple = 0;
    let grapes = 0;
    switch (day) {
        case ("Monday"):
        case ("Tuesday"):
        case ("Wednesday"):
        case ("Thursday"):
        case ("Friday"):
            banana = 2.5;
            apple = 1.2;
            orange = 0.85;
            grapefruit = 1.45;
            kiwi = 2.7;
            pineapple = 5.5;
            grapes = 3.85;
            switch (fruit) {
                case ("banana"):
                    total = banana * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("apple"):
                    total = apple * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("orange"):
                    total = orange * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("grapefruit"):
                    total = grapefruit * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("kiwi"):
                    total = kiwi * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("pineapple"):
                    total = pineapple * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("grapes"):
                    total = grapes * quantity;
                    console.log(total.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case ("Saturday"):
        case ("Sunday"):
            banana = 2.7;
            apple = 1.25;
            orange = 0.9;
            grapefruit = 1.6;
            kiwi = 3;
            pineapple = 5.6;
            grapes = 4.2;
            switch (fruit) {
                case ("banana"):
                    total = banana * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("apple"):
                    total = apple * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("orange"):
                    total = orange * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("grapefruit"):
                    total = grapefruit * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("kiwi"):
                    total = kiwi * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("pineapple"):
                    total = pineapple * quantity;
                    console.log(total.toFixed(2));
                    break;
                case ("grapes"):
                    total = grapes * quantity;
                    console.log(total.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        default:
            console.log("error");
            break;
    }

}
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);
