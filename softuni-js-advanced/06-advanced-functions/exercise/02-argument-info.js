function argInfo(...args) {

    let types = {};

    for (const arg of args) {
        let type = typeof arg;
        let val = arg;
        if (types[type]) {
            types[type]++;
        } else {
            types[type] = 0;
            types[type]++;
        }
        console.log(`${type}: ${val}`);
    }
    let sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);
    for (const [type, val] of sorted) {
        console.log(`${type} = ${val}`);
    }

}

argInfo('cat', 42, function () { console.log('Hello world!'); });
// argInfo({ name: 'bob' }, 3.333, 9.999);