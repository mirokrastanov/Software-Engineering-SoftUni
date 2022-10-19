function bombNumbers(main, off) {
    let result = main.slice();
    let bomb = off[0];
    let power = off[1];

    for (let i = 0; i < result.length; i++) {
        let current = result[i];
        if (current == bomb) {
            result.splice(Math.max(i - power, 0), 2 * power + 1);
            i = 0;
        }
    }
    let sum = result.reduce((a, b) => a + b, 0);
    
    console.log(sum);

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
bombNumbers([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2]);