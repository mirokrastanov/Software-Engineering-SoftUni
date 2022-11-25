function lettersChangeNumbers(input) {
    let elements = input.slice().split(" ").filter(a => a != "");
    let totalSum = 0;

    for (let element of elements) {
        let elArr = element.split("");
        let firstLetter = elArr.shift();
        let lastLetter = elArr.pop();
        let currentNum = Number(elArr.splice(0).join(""));
        if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
            currentNum /= (firstLetter.charCodeAt() - 64);
        } else {
            currentNum *= (firstLetter.toUpperCase().charCodeAt() - 64);
        }
        if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {
            currentNum -= (lastLetter.charCodeAt() - 64);
        } else {
            currentNum += (lastLetter.toUpperCase().charCodeAt() - 64);
        }
        totalSum += currentNum;
    }
    console.log(totalSum.toFixed(2));
}

lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');