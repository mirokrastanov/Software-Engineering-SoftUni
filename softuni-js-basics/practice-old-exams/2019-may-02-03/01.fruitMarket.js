function fruitMarket(strawberryPrice, bananaQuantity, orangeQuantity, raspberryQuantity, strawberryQuantity) {

    // let strawberryPrice = Number(input[0]);
    // let bananaQuantity = Number(input[1]);
    // let orangeQuantity = Number(input[2]);
    // let raspberryQuantity = Number(input[3]);
    // let strawberryQuantity = Number(input[4]);

    let total = (strawberryPrice * strawberryQuantity) +
    (raspberryQuantity * (strawberryPrice * 0.5)) +
    (orangeQuantity * (strawberryPrice * 0.5 * 0.6)) +
    (bananaQuantity * (strawberryPrice * 0.5 * 0.2));

    console.log(total.toFixed(2));


}


// fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);
// fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"]);
fruitMarket(48,
    10,
    3.3,
    6.5,
    1.7
    );
