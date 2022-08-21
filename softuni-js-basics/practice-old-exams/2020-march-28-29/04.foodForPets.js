function foodForPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let foodTotal = Number(input[index]);
    index++;
    let foodLeft = foodTotal;
    let biscuitsEaten = 0;
    let dogTotal = 0;
    let catTotal = 0;
    for (let i = 1; i <= days; i++) {
        let foodEatenByDog = Number(input[index]);
        index++;
        foodLeft -= foodEatenByDog;
        dogTotal += foodEatenByDog;
        let foodEatenByCat = Number(input[index]);
        index++;
        foodLeft -= foodEatenByCat;
        catTotal += foodEatenByCat;
        if (i % 3 === 0) {
            biscuitsEaten += 0.1 * (foodEatenByCat + foodEatenByDog);
        }
    }
    biscuitsEaten = Math.round(biscuitsEaten);
    let foodPercent = (foodTotal - foodLeft) / foodTotal * 100;
    let dogPercent = dogTotal / (foodTotal - foodLeft) * 100;
    let catPercent = catTotal / (foodTotal - foodLeft) * 100;
    console.log(`Total eaten biscuits: ${biscuitsEaten}gr.`);
    console.log(`${foodPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercent.toFixed(2)}% eaten from the cat.`);

}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);