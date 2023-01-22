function lastKnum(seqLength, prevNums) {
    let output = [];

    for (let i = 0; i < seqLength; i++) {
        if (i == 0) {
            output.push(1);
            continue;
        }
        let prevSum = 0;
        if (output.length < prevNums) {
            prevSum = output.slice().reduce((a, b) => a + b);
        } else {
            let p = i - 1;
            for (let j = 0; j < prevNums; j++) {
                prevSum += output[p];
                p--;
            }
        }
        output.push(prevSum);
    }
    // console.log(output);
    return output;
}

lastKnum(6, 3);
lastKnum(8, 2);