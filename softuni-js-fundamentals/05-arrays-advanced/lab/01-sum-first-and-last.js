function sumFirstAndLast(inputArr) {
    let sum = Number(inputArr[0]) + Number(inputArr[(inputArr.length - 1)]);
    console.log(sum);

}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);