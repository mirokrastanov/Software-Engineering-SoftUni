function aluminumJoinery(input) {
    let count = Number(input[0]);
    let type = input[1];
    let deliveryType = input[2];
    let deliveryPrice = 0;
    let pricePer = 0;
    let totalPrice = 0;

    if (count < 10 || count > 1000) {
        console.log(`Invalid order`);
    } else {
        switch (type) {
            case "90X130": pricePer = 110;
                if (count > 30 && count <= 60) {
                    pricePer *= 0.95;
                } else if (count > 60) {
                    pricePer *= 0.92;
                } break;
            case "100X150": pricePer = 140;
                if (count > 40 && count <= 80) {
                    pricePer *= 0.94;
                } else if (count > 80) {
                    pricePer *= 0.9;
                } break;
            case "130X180": pricePer = 190;
                if (count > 20 && count <= 50) {
                    pricePer *= 0.93;
                } else if (count > 50) {
                    pricePer *= 0.88;
                } break;
            case "200X300": pricePer = 250;
                if (count > 25 && count <= 50) {
                    pricePer *= 0.91;
                } else if (count > 50) {
                    pricePer *= 0.86;
                } break;
            default: break;
        }
        switch (deliveryType) {
            case "With delivery": deliveryPrice = 60; break;
            case "Without delivery": deliveryPrice = 0; break;
            default: break;
        }
        totalPrice = (count * pricePer) + deliveryPrice;
        if (count >= 100) {
            totalPrice *= 0.96;
        }
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }

}

aluminumJoinery(["40",
    "90X130",
    "Without delivery"]);
aluminumJoinery(["105",
    "100X150",
    "With delivery"]);
aluminumJoinery(["2",
    "130X180",
    "With delivery"]);


