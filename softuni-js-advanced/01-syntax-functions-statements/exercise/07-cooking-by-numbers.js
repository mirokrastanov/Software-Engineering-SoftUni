function cooking(...params) {

    let num = Number(params.shift());
    let operations = params.splice(0);

    while (operations.length > 0) {
        let operation = operations.shift();
        switch (operation) {
            case "chop":
                num /= 2;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num += 1;
                break;
            case "bake":
                num *= 3;
                break;
            case "fillet":
                num *= 0.8;
                num = Number(num.toFixed(1));
                break;
        }
        console.log(num);
    }
}

// cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');