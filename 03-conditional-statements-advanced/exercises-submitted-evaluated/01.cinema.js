function cinema(input) {
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let capacity = r * c;
    let price = 0;
    if (type === "Premiere") {
        price = capacity * 12;
        console.log(`${price.toFixed(2)} leva`);
    } else if (type === "Normal") {
        price = capacity * 7.5;
        console.log(`${price.toFixed(2)} leva`);
    } else if (type === "Discount") {
        price = capacity * 5;
        console.log(`${price.toFixed(2)} leva`);
    }
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
