function mobileOperator(input) {
    let contractDuration = input[0];
    let contractType = input[1];
    let internetInc = input[2];
    let monthsToPay = Number(input[3]);
    let monthlyPay = 0;

    switch (contractDuration) {
        case "one":
            switch (contractType) {
                case "Small": monthlyPay = 9.98; break;
                case "Middle": monthlyPay = 18.99; break;
                case "Large": monthlyPay = 25.98; break;
                case "ExtraLarge": monthlyPay = 35.99; break;
                default: break;
            }
            break;
        case "two":
            switch (contractType) {
                case "Small": monthlyPay = 8.58; break;
                case "Middle": monthlyPay = 17.09; break;
                case "Large": monthlyPay = 23.59; break;
                case "ExtraLarge": monthlyPay = 31.79; break;
                default: break;
            }
            break;
        default: break;
    }
    switch (internetInc) {
        case "yes":
            if (monthlyPay <= 10) {
                monthlyPay += 5.5;
            } else if (monthlyPay <= 30) {
                monthlyPay += 4.35;
            } else {
                monthlyPay += 3.85;
            }
            break;
        case "no": break;
        default: break;
    }
    let total = monthlyPay * monthsToPay;
    if (contractDuration === "two") {
        total *= 0.9625;
    }
    console.log(`${total.toFixed(2)} lv.`);


}

mobileOperator(["one", "Small", "yes", "10"]);
mobileOperator(["two", "Large", "no", "10"]);
mobileOperator(["two", "ExtraLarge", "yes", "20"]);
mobileOperator(["two", "Small", "yes", "20"]);