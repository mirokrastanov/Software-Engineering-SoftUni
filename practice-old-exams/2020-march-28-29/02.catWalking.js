function catWalking(input) {
    let minWalkPerDay = Number(input[0]);
    let dailyWalksCount = Number(input[1]);
    let dailyCaloriesTaken = Number(input[2]);
    let caloriesPerMin = 5;

    let caloriesBurned = caloriesPerMin * minWalkPerDay * dailyWalksCount;

    if (caloriesBurned >= dailyCaloriesTaken * 0.5) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }


}

catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
catWalking(["40", "2", "300"]);