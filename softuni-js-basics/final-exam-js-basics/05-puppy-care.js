function puppyCare(input) {
    let index = 0;
    let foodInitial = Number(input[index]) * 1000;
    index++;
    let command = input[index];
    index++;
    let foodLeft = foodInitial;

    while (command !== "Adopted") {
        let dailyFood = Number(command);
        foodLeft -= dailyFood;

        command = input[index];
        index++;
    }
    if (foodLeft >= 0) {
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(foodLeft)} grams more.`);
    }


}

puppyCare(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"]);
// puppyCare(["3",
//     "1000",
//     "1000",
//     "1000",
//     "Adopted"]);
// puppyCare(["2",
//     "999",
//     "456",
//     "999",
//     "999",
//     "123",
//     "456",
//     "Adopted"]);