function vacation(groupSize, groupType, day) {
    let pricePerPerson = 0;
    switch (day) {
        case "Friday":
            switch (groupType) {
                case "Students": pricePerPerson = 8.45; break;
                case "Business": pricePerPerson = 10.9; break;
                case "Regular": pricePerPerson = 15; break;
                default: break;
            }
            break;
        case "Saturday":
            switch (groupType) {
                case "Students": pricePerPerson = 9.8; break;
                case "Business": pricePerPerson = 15.6; break;
                case "Regular": pricePerPerson = 20; break;
                default: break;
            }
            break;
        case "Sunday":
            switch (groupType) {
                case "Students": pricePerPerson = 10.46; break;
                case "Business": pricePerPerson = 16; break;
                case "Regular": pricePerPerson = 22.5; break;
                default: break;
            }
            break;
        default: break;
    }
    let totalPrice = pricePerPerson * groupSize;
    if (groupSize >= 30 && groupType == "Students") {
        totalPrice *= 0.85;
    } else if (groupSize >= 100 && groupType == "Business") {
        totalPrice = pricePerPerson * (groupSize - 10);
    } else if (groupSize >= 10 && groupSize <= 20 && groupType == "Regular") {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(
    30,
    "Students",
    "Sunday"
);