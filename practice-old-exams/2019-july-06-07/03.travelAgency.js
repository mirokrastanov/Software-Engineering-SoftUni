function travelAgency(input) {
    let city = input[0];
    let package = input[1];
    let hasVip = input[2];
    let days = Number(input[3]);
    let pricePerDay = 0;
    let totalPrice = 0;

    if (days < 1) {
        console.log(`Days must be positive number!`);
    } else {
        if (days > 7) {
            days = days - 1;
        }
        if (city === "Bansko" || city === "Borovets") {
            if (package === "noEquipment") {
                pricePerDay = 80;
                totalPrice = days * pricePerDay;
                if (hasVip === "yes") {
                    totalPrice = totalPrice * 0.95;
                }
                console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
            } else if (package === "withEquipment") {
                pricePerDay = 100;
                totalPrice = days * pricePerDay;
                if (hasVip === "yes") {
                    totalPrice = totalPrice * 0.9;
                }
                console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
            } else {
                console.log(`Invalid input!`);
            }
        } else if (city === "Varna" || city === "Burgas") {
            if (package === "noBreakfast") {
                pricePerDay = 100;
                totalPrice = days * pricePerDay;
                if (hasVip === "yes") {
                    totalPrice = totalPrice * 0.93;
                }
                console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
            } else if (package === "withBreakfast") {
                pricePerDay = 130;
                totalPrice = days * pricePerDay;
                if (hasVip === "yes") {
                    totalPrice = totalPrice * 0.88;
                }
                console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
            } else {
                console.log(`Invalid input!`);
            }
        } else {
            console.log(`Invalid input!`);
        }
    }
}

travelAgency(["Borovets", "noEquipment", "yes", "6"]);
travelAgency(["Bansko", "withEquipment", "no", "2"]);
travelAgency(["Varna", "withBreakfast", "yes", "5"]);
travelAgency(["Burgas", "noBreakfast", "no", "4"]);
travelAgency(["Varna", "withBreakfast", "no", "0"]);
travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);
