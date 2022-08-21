function tradeCommissions(input) {
    let city = input[0];
    let s = Number(input[1]);
    let commission = 0;
    switch (city) {
        case ("Sofia"):
            if (s >= 0 && s <= 500) {
                commission = 0.05 * s;
                console.log(commission.toFixed(2));
            } else if (s > 500 && s <= 1000) {
                commission = 0.07 * s;
                console.log(commission.toFixed(2));
            } else if (s > 1000 && s <= 10000) {
                commission = 0.08 * s;
                console.log(commission.toFixed(2));
            } else if (s > 10000) {
                commission = 0.12 * s;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case ("Varna"):
            if (s >= 0 && s <= 500) {
                commission = 0.045 * s;
                console.log(commission.toFixed(2));
            } else if (s > 500 && s <= 1000) {
                commission = 0.075 * s;
                console.log(commission.toFixed(2));
            } else if (s > 1000 && s <= 10000) {
                commission = 0.1 * s;
                console.log(commission.toFixed(2));
            } else if (s > 10000) {
                commission = 0.13 * s;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case ("Plovdiv"):
            if (s >= 0 && s <= 500) {
                commission = 0.055 * s;
                console.log(commission.toFixed(2));
            } else if (s > 500 && s <= 1000) {
                commission = 0.08 * s;
                console.log(commission.toFixed(2));
            } else if (s > 1000 && s <= 10000) {
                commission = 0.12 * s;
                console.log(commission.toFixed(2));
            } else if (s > 10000) {
                commission = 0.145 * s;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }
}
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);
