function depositCalc(input) {
    let amount = Number(input[0]);
    let duration = Number(input[1]);
    let interestRate = Number(input[2]) / 100;
    let finalAmount = amount + duration * ((amount * interestRate) / 12);
    console.log(finalAmount);
}

depositCalc(["200", "3", "5.7"]);
depositCalc(["2350", "6", "7"]);
