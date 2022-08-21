function pets(input) {
    let days = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dailyDogFood = Number(input[2]);
    let dailyCatFood = Number(input[3]);
    let dailyTurtleFoodInGrams = Number(input[4]);
    let dailyTurtleFood = dailyTurtleFoodInGrams / 1000;
    let dailyTotal = dailyCatFood + dailyDogFood + dailyTurtleFood;
    let foodTotal = days * dailyTotal;
    let foodDiff = Math.abs(foodLeft - foodTotal);
    if (foodTotal <= foodLeft) {
        console.log(`${Math.floor(foodDiff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodDiff)} more kilos of food are needed.`);
    }

}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);
