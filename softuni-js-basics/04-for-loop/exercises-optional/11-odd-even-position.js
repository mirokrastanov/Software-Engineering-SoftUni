function oddEvenPosition(input) {
    let numbers = Number(input[0]);
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let oddFlag = false;
    let evenFlag = false;

    for (let number = 0; number <= numbers; number += 2) {
        let odd = Number(input[number + 1]);
        if (isNaN(odd)) {
            if (number == 0) {
                oddFlag = true;
                evenFlag = true;
            }
            break;
        }
        oddSum += odd;
        if (odd > oddMax) {
            oddMax = odd;
        }
        if (odd < oddMin) {
            oddMin = odd;
        }
        let even = Number(input[number + 2]);
        if (isNaN(even)) {
            if (number == 0) {
                evenFlag = true;
            }
            break;
        }
        evenSum += even;
        if (even > evenMax) {
            evenMax = even;
        }
        if (even < evenMin) {
            evenMin = even;
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddFlag) {
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (evenFlag) {
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }

}

oddEvenPosition(['1', '1']);
oddEvenPosition(['0']);
oddEvenPosition(['2', '1.5', '-2.5']);