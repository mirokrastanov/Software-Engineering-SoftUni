function sameNums(num) {

    let match = true;
    let numAsStr = num.toString();
    let current = numAsStr[0];
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);
        if (current != numAsStr[i]) {
            match = false;
        }
    }

    console.log(match);
    console.log(sum);
}

sameNums(2222222);
sameNums(1234);