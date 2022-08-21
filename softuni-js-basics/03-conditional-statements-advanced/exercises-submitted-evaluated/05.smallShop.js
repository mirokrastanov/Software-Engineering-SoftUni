function smallShop(input) {
    let item = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let coffee = 0;
    let water = 0;
    let beer = 0;
    let sweets = 0;
    let peanuts = 0;
    let total = 0;

    switch (city) {
        case ("Sofia"):
            coffee = 0.5;
            water = 0.8;
            beer = 1.2;
            sweets = 1.45;
            peanuts = 1.6;
            break;
        case ("Plovdiv"):
            coffee = 0.4;
            water = 0.7;
            beer = 1.15;
            sweets = 1.3;
            peanuts = 1.5;
            break;
        case ("Varna"):
            coffee = 0.45;
            water = 0.7;
            beer = 1.1;
            sweets = 1.35;
            peanuts = 1.55;
            break;
    }
    switch (item) {
        case ("coffee"):
            total = coffee * quantity;
            break;
        case ("water"):
            total = water * quantity;
            break;
        case ("beer"):
            total = beer * quantity;
            break;
        case ("sweets"):
            total = sweets * quantity;
            break;
        case ("peanuts"):
            total = peanuts * quantity;
            break;
    }
    console.log(total);
}
smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "2"]);
smallShop(["water", "Plovdiv", "2"]);
smallShop(["sweets", "Sofia", "2.23"]);
