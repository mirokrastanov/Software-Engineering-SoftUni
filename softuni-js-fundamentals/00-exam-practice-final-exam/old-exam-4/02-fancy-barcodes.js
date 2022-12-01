function fancyBarcodes(input) {
    // let regExp = /(?<del1>[@])(?<del2>[#]+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(\k<del1>)(\k<del2>)/;
    let regExp = /@#+(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])@#+/;
    let barcodeCount = Number(input.shift());
    let barcodes = input.splice(0);

    barcodes.forEach(barcode => {
        let valid = barcode.match(regExp);
        if (!valid) {
            console.log("Invalid barcode");
        } else {
            let currentBarcode = valid.groups.barcode;
            let productGroup = currentBarcode.split("").map(Number).filter(a => !isNaN(a));
            if (productGroup.length > 0) {
                productGroup = productGroup.map(a => String(a)).reduce((a,b) => a + b);
            } else {
                productGroup = "00";
            }
            console.log(`Product group: ${productGroup}`);
        }
    });
}

fancyBarcodes((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]));
fancyBarcodes((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]));