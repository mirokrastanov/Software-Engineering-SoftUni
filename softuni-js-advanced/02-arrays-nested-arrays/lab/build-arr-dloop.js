function build(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            output.push(arr[j][i]);
        }
    }
    console.log(output);


}
build([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);