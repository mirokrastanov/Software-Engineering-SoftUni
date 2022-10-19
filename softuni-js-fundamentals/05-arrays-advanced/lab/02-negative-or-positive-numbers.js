function negativeOrPositive(inputArr) {
    let resultArr = [];

    for (const element of inputArr) {
        if (element < 0) {
            resultArr.unshift(element);
        } else {
            resultArr.push(element);
        }
    }
    console.log(resultArr.join("\n"));
}

negativeOrPositive(['7', '-2', '8', '9']);
negativeOrPositive(['3', '-2', '0', '-1']);