function guineaPig(inputArr) {
    let workingArr = inputArr.slice().map(Number).map(a => a * 1000);
    let food = workingArr.shift();
    let hay = workingArr.shift();
    let cover = workingArr.shift();
    let petWeight = workingArr.shift();
    let notEnough = false;

    for (let day = 1; day <= 30; day++) {
        food -= 300;
        if (day % 2 == 0) {
            hay -= (food * 0.05);
        }
        if (day % 3 == 0) {
            cover -= (1 / 3 * petWeight);
        }
        if (food <= 0) {
            food = 0;
        }
        if (hay <= 0) {
            hay = 0;
        }
        if (cover <= 0) {
            cover = 0;
        }
        if (food == 0 || hay == 0 || cover == 0) {
            notEnough = true;
            break;
        }
    }
    if (notEnough) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)},`
            + ` Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }

}

guineaPig((["10", "5", "5.2", "1"]));
guineaPig((["1", "1.5", "3", "1.5"]));
guineaPig((["9", "5", "5.2", "1"]));