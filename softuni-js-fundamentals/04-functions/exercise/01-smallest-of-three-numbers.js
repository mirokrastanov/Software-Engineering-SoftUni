function smallestNum(num1, num2, num3) {
    let smallestNum = Number.MAX_SAFE_INTEGER;

    if (num1 < smallestNum) {
        smallestNum = num1;
    }
    if (num2 < smallestNum) {
        smallestNum = num2;
    }
    if (num3 < smallestNum) {
        smallestNum = num3;
    }
    console.log(smallestNum);
}

smallestNum(2, 5, 3);

