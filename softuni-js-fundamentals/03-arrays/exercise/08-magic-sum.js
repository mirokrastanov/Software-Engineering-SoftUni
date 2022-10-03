function magicSum(arr, num) {

    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (i == j) {
                continue;
            }
            let other = arr[j];
            let sum = current + other;
            if (sum == num) {
                console.log(`${current} ${other}`);
            }
        }
    }

}

magicSum(
    [14, 20, 60, 13, 7, 19, 8],
    27
);