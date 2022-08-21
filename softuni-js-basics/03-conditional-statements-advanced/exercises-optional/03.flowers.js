function flowers(input) {
    let chrysanthemumQuantity = Number(input[0]);
    let roseQuantity = Number(input[1]);
    let tulipQuantity = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];
    let chrysanthemumPrice = 0;
    let rosePrice = 0;
    let tulipPrice = 0;
    let totalPrice = 0;
    let totalQuantity = chrysanthemumQuantity + roseQuantity + tulipQuantity;

    switch (season) {
        case "Spring":
            chrysanthemumPrice = 2;
            rosePrice = 4.10;
            tulipPrice = 2.5;
            if (isHoliday === "Y") {
                chrysanthemumPrice = 1.15 * chrysanthemumPrice;
                rosePrice = 1.15 * rosePrice;
                tulipPrice = 1.15 * tulipPrice;
            }
            totalPrice = (chrysanthemumQuantity * chrysanthemumPrice) + (roseQuantity * rosePrice) + (tulipQuantity * tulipPrice);
            if (tulipQuantity > 7) {
                totalPrice = totalPrice * 0.95;
            }
            break;
        case "Summer":
            chrysanthemumPrice = 2;
            rosePrice = 4.10;
            tulipPrice = 2.5;
            if (isHoliday === "Y") {
                chrysanthemumPrice = 1.15 * chrysanthemumPrice;
                rosePrice = 1.15 * rosePrice;
                tulipPrice = 1.15 * tulipPrice;
            }
            totalPrice = (chrysanthemumQuantity * chrysanthemumPrice) + (roseQuantity * rosePrice) + (tulipQuantity * tulipPrice);

            break;
        case "Autumn":
            chrysanthemumPrice = 3.75;
            rosePrice = 4.5;
            tulipPrice = 4.15;
            if (isHoliday === "Y") {
                chrysanthemumPrice = 1.15 * chrysanthemumPrice;
                rosePrice = 1.15 * rosePrice;
                tulipPrice = 1.15 * tulipPrice;
            }
            totalPrice = (chrysanthemumQuantity * chrysanthemumPrice) + (roseQuantity * rosePrice) + (tulipQuantity * tulipPrice);

            break;
        case "Winter":
            chrysanthemumPrice = 3.75;
            rosePrice = 4.5;
            tulipPrice = 4.15;
            if (isHoliday === "Y") {
                chrysanthemumPrice = 1.15 * chrysanthemumPrice;
                rosePrice = 1.15 * rosePrice;
                tulipPrice = 1.15 * tulipPrice;
            }
            totalPrice = (chrysanthemumQuantity * chrysanthemumPrice) + (roseQuantity * rosePrice) + (tulipQuantity * tulipPrice);
            if (roseQuantity >= 10) {
                totalPrice = totalPrice * 0.9;
            }
            break;
        default: break;
    }
    if (totalQuantity > 20) {
        totalPrice = totalPrice * 0.8;
    }
    totalPrice = totalPrice + 2;

    console.log(`${totalPrice.toFixed(2)}`);

}

flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);
