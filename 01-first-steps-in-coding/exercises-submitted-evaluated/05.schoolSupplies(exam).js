function schoolSupplies(input) {
    let penPrice = 5.80;
    let markerPrice = 7.20;
    let boardCleanerPrice = 1.20;
    let penCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let boardCleanerCount = Number(input[2]);
    let discountRate = Number(input[3]) / 100;
    let priceBeforeDiscount = (penPrice * penCount) + (markerPrice * markerCount) + (boardCleanerPrice * boardCleanerCount);
    let discountOverall = priceBeforeDiscount * discountRate;
    let priceAfterDiscount = priceBeforeDiscount - discountOverall;
    console.log(priceAfterDiscount);
}

schoolSupplies(["2", "3", "4", "25"]);
schoolSupplies(["4", "2", "5", "13"]);
