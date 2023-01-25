function solve(array) {
    
    for (let i = 0; i < array.length; i++) {
        let row = 0;
        let col = 0;
        row += array[i].reduce((a,b) => a + b);
        for (let j = 0; j < array.length; j++) {
            // console.log(`${i}-${j} | ${j}-${i}`);
            col += array[j][i];
        }    
        console.log(row + " | " + col);    
    }
}

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);