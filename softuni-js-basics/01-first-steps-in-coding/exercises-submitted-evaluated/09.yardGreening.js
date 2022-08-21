function yardGreening(input) {
    let pricePerSquareMeter = 7.61;
    let discont = (18 / 100);
    let squareMeters = Number(input[0]);
    let finalPriceBeforeDiscount = squareMeters * pricePerSquareMeter;
    let discountValue = finalPriceBeforeDiscount * discont;
    let finalPriceAfterDiscount = finalPriceBeforeDiscount - discountValue;

    console.log(`The final price is: ${finalPriceAfterDiscount} lv.`);
    console.log(`The discount is: ${discountValue} lv.`);
}

yardGreening(["550"]);
