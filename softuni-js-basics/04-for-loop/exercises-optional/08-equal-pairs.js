function equalPairs(input) {
    let pairs = Number(input[0]);
    let previousPair = 0;
    let isEqual = true;
    let adjacentDiff = 0;
    let maxAdjacentDiff = 0;

    for (let pair = 1; pair <= 2 * pairs; pair += 2) {
        let num1 = Number(input[pair]);
        let num2 = Number(input[pair + 1]);
        let currentPair = num1 + num2;
        if (pair == 1) {
            previousPair = currentPair;
            continue;
        }
        if (previousPair == currentPair) {
            continue;
        } else {
            isEqual = false;
            if (currentPair > previousPair) {
                adjacentDiff = currentPair - previousPair;
            } else {
                adjacentDiff = previousPair - currentPair;
            }
            // if (currentPair >= 0 && previousPair >= 0) {
            //     adjacentDiff = Math.abs(currentPair - previousPair);
            // } else if (currentPair >= 0 && previousPair <= 0) {
            //     adjacentDiff = currentPair - previousPair;
            // } else if (currentPair <= 0 && previousPair <= 0) {
            //     adjacentDiff = Math.abs(Math.abs(previousPair) - Math.abs(currentPair));
            // } else if (currentPair <= 0 && previousPair >= 0) {
            //     adjacentDiff = previousPair - currentPair;
            // }
            if (adjacentDiff > maxAdjacentDiff) {
                maxAdjacentDiff = adjacentDiff;
            }
            previousPair = currentPair;
        }
    }
    if (!isEqual) {
        console.log(`No, maxdiff=${maxAdjacentDiff}`);
    } else {
        console.log(`Yes, value=${previousPair}`);
    }

}

equalPairs([
    '4',
    '1',
    '1',
    '3',
    '1',
    '2',
    '2',
    '0',
    '0'
]);