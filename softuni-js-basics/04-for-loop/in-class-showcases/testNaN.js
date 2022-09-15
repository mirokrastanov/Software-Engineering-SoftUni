function solve() {
    let nan = NaN;

    console.log(typeof(nan));
    console.log(nan);
    console.log(`----`);

    if (nan == "NaN") {
        console.log(`str`);
    } else if (nan == NaN) {
        console.log(`NaN`);
    } else if (isNaN(nan)) {
        console.log(isNaN(nan));
        console.log(`boolean`);
    }


}

solve();