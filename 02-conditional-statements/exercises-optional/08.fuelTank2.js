function fuelTank2(input) {
    let fuelType = input[0];
    let fuelQuantity = Number(input[1]);
    let haveClubCard = input[2];
    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;
    let totalPrice = 0;
    if (haveClubCard === "Yes") {
        gasolinePrice = gasolinePrice - 0.18;
        dieselPrice = dieselPrice - 0.12;
        gasPrice = gasPrice - 0.08;
    }
    if (fuelType === "Gas") {
        totalPrice = gasPrice * fuelQuantity;
    } else if (fuelType === "Gasoline") {
        totalPrice = gasolinePrice * fuelQuantity;
    } else if (fuelType === "Diesel") {
        totalPrice = dieselPrice * fuelQuantity;
    }
    if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        totalPrice = 0.92 * totalPrice;
    } else if (fuelQuantity > 25) {
        totalPrice = 0.9 * totalPrice;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`);
}

fuelTank2(["Gas", "30", "Yes"]);
fuelTank2(["Gasoline", "25", "No"]);
fuelTank2(["Diesel", "19", "No"]);
