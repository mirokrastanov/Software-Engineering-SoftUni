function smallestOf2(inputArr) {
    let workingArr = inputArr.slice();
    workingArr.map(Number);
    let smallest = Number.MAX_SAFE_INTEGER;
    let result = [];

    function findSmallest(workingArr) {
        for (let index = 0; index < workingArr.length; index++) {
            let current = workingArr[index];
            if (current < smallest) {
                smallest = current;
            }
        }
        let output = smallest;
        smallest = Number.MAX_SAFE_INTEGER;
        return output;
    }

    function cutSmallest(indexToCut, workingArr) {
        let indexOfSmallest = workingArr.indexOf(indexToCut);
        workingArr.splice(indexOfSmallest);
        return workingArr;
    }

    result.push(findSmallest(workingArr));
    cutSmallest(findSmallest(workingArr), workingArr);

    result.push(findSmallest(workingArr));
    cutSmallest(findSmallest(workingArr), workingArr);

    console.log(result.join(" "));

}

smallestOf2([30, 15, 50, 5]);
smallestOf2([3, 0, 10, 4, 7, 3]);