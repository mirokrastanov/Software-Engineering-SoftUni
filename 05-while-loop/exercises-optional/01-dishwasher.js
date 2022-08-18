function dishwasher(input) {
    let index = 0;
    let dishDetergent = Number(input[index]) * 750;
    index++;
    let command = input[index];
    index++;
    let loadingCount = 0;
    let dishDetergentLeft = dishDetergent;
    let totalDishes = 0;
    let totalPots = 0;

    while (command !== "End") {
        let dishesToWash = Number(command);
        loadingCount++;
        let dishDetergentPerDish = 0;
        if (loadingCount % 3 === 0) {
            dishDetergentPerDish = 15;
            totalPots += dishesToWash;
        } else {
            dishDetergentPerDish = 5;
            totalDishes += dishesToWash;
        }

        for (let i = 1; i <= dishesToWash; i++) {
            dishDetergentLeft -= dishDetergentPerDish;
        }
        if (dishDetergentLeft < 0) {
            break;
        }
        command = input[index];
        index++;
    }
    if (dishDetergentLeft >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${totalDishes} dishes and ${totalPots} pots were washed.`);
        console.log(`Leftover detergent ${dishDetergentLeft} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(dishDetergentLeft)} ml. more necessary!`);
    }


}

dishwasher([
    "2",
    "53",
    "65",
    "55",
    "End"
]);
dishwasher([
    '1',
    '10',
    '15',
    '10',
    '12',
    '13',
    '30'
]);