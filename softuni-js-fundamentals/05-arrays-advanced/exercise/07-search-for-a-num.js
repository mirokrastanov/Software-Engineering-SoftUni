function search(main, secondary) {
    let toTake = secondary[0];
    let delFromTaken = secondary[1];
    let target = secondary[2];

    let output = main.slice().splice(0, toTake);
    output.splice(0, delFromTaken);
    
    let occurences = 0;
    for (let num of output) {
        if (num == target) {
            occurences++;
        }
    }
    console.log(`Number ${target} occurs ${occurences} times.`);


}

search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
search([7, 1, 5, 8, 2, 7], [3, 1, 5]);