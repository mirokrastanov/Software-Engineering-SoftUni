function agencyProfit(input) {
    index = 0;
    let name = input[index++];
    let adults = input[index++];
    let kids = input[index++];
    let adultPrice = Number(input[index++]);
    let tax = Number(input[index++]);

    let kidPrice = adultPrice * 0.3;
    let adultTaxed = adultPrice + tax;
    let kidTaxed = kidPrice + tax;

    let totalPrice = (kids * kidTaxed) + (adults * adultTaxed);
    let earnings = 0.2 * totalPrice;


    console.log(`The profit of your agency from ${name} tickets is ${earnings.toFixed(2)} lv.`);


}

agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"]);
agencyProfit(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"]);

