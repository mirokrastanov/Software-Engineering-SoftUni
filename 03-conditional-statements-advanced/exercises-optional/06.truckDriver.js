function truckDriver(input) {
    let season = input[0];
    let monthlyKM = Number(input[1]);
    let payRatePerKM = 0;
    let seasonWage = 0;

    if (monthlyKM <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn": payRatePerKM = 0.75; break;
            case "Summer": payRatePerKM = 0.9; break;
            case "Winter": payRatePerKM = 1.05; break;
            default: break;
        }
        seasonWage = 4 * monthlyKM * payRatePerKM;
    } else if (monthlyKM > 5000 && monthlyKM <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn": payRatePerKM = 0.95; break;
            case "Summer": payRatePerKM = 1.1; break;
            case "Winter": payRatePerKM = 1.25; break;
            default: break;
        }
        seasonWage = 4 * monthlyKM * payRatePerKM;
    } else if (monthlyKM > 10000 && monthlyKM <= 20000) {
        payRatePerKM = 1.45;
        seasonWage = 4 * monthlyKM * payRatePerKM;
    }
    seasonWage = seasonWage * 0.9;
    console.log(seasonWage.toFixed(2));

}

truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);
