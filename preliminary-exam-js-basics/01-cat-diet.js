function catDiet(input) {
    let fatPercent = Number(input[0] / 100);
    let proteinPercent = Number(input[1] / 100);
    let carbsPercent = Number(input[2] / 100);
    let totalCalories = Number(input[3]);
    let waterPercent = Number(input[4] / 100);

    let fat = fatPercent * totalCalories;
    let protein = proteinPercent * totalCalories;
    let carbs = carbsPercent * totalCalories;
    fat /= 9;
    protein /= 4;
    carbs /= 4;

    let foodWeight = fat + protein + carbs;
    let caloriesPer = totalCalories / foodWeight;
    caloriesPer -= (waterPercent * caloriesPer);    

    console.log(caloriesPer.toFixed(4));

}

catDiet(["60",
    "25",
    "15",
    "2500",
    "60"]);
catDiet(["40",
    "40",
    "20",
    "3000",
    "40"]);
catDiet(["20",
    "60",
    "20",
    "1800",
    "50"]);
