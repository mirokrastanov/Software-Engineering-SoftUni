function lastKNumberSequence(sequenceLength, previosKElements) {
    let resultArr = [1];
    for (let num = 1; num < sequenceLength; num++) {
        let currentElement = 0;
        for (let el = 1; el <= previosKElements; el++) {
            currentElement += resultArr[num - el];
            if ((num - el - 1) < 0) {
                break;
            }
        }
        resultArr.push(currentElement);
        
    }
    console.log(resultArr.join(" "));

}

lastKNumberSequence(6, 3);
lastKNumberSequence(8, 2);