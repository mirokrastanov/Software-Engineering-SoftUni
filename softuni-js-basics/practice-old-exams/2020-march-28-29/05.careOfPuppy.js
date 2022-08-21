function careOfPuppy(input) {
    let index = 0;
    let foodBought = 1000 * Number(input[index]);
    index++;
    let foodPerMeal = input[index];
    index++;
    let foodLeft = foodBought;

    while (foodPerMeal !== "Adopted") {
        foodPerMeal = Number(foodPerMeal);
        foodLeft -= foodPerMeal;

        foodPerMeal = input[index];
        index++;
    }

    if (foodLeft >= 0) {
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(foodLeft)} grams more.`);
    }

}

careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);