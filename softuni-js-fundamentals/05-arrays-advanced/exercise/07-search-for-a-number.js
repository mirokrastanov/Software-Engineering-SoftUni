function searchForANumber(main, off) {
    let toTake = off[0];
    let toDel = off[1];
    let target = off[2];
    let occurrences = 0;

    let result = main.slice().splice(0, toTake);
    result.splice(0, toDel);
    
    for (let i = 0; i < result.length; i++) {
        if (result[i] == target) {
            occurrences++;
        }
    }
    console.log(`Number ${target} occurs ${occurrences} times.`);

}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);