function smallestOf2(inputArr) {
    let workingArr = inputArr.slice();
    workingArr.map(Number);
    workingArr.sort((a,b) => a - b);
    let result = workingArr.slice(0, 2);

    console.log(result.join(" "));

}

smallestOf2([30, 15, 50, 5]);
smallestOf2([3, 0, 10, 4, 7, 3]);