function barcodeGenerator(input) {
    let start = input[0];
    let end = input[1];
    let result = "";


    for (let i = Number(start); i <= Number(end); i++) {
        let currentBarcode = String(i);
        let num1 = Number(currentBarcode[0]);
        let num2 = Number(currentBarcode[1]);
        let num3 = Number(currentBarcode[2]);
        let num4 = Number(currentBarcode[3]);
        if (num1 % 2 === 0) {
            continue;
        } else if (num2 % 2 === 0) {
            continue;
        } else if (num3 % 2 === 0) {
            continue;
        } else if (num4 % 2 === 0) {
            continue;
        } else {
            if (num1 < start[0] || num1 > end[0]) {
                continue;
            } else if (num2 < start[1] || num2 > end[1]) {
                continue;
            } else if (num3 < start[2] || num3 > end[2]) {
                continue;
            } else if (num4 < start[3] || num4 > end[3]) {
                continue;
            } else {
                result += currentBarcode + " ";
            }
        }

    }
    console.log(result);

}

barcodeGenerator(["2345",
    "6789"]);
barcodeGenerator(["3256",
    "6579"]);
barcodeGenerator(["1365",
    "5877"]);
