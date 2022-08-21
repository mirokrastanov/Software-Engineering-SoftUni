function vegetableMarket(input) {
    let veggiePrice = Number(input[0]);
    let fruitsPrice = Number(input[1]);
    let veggieCount = Number(input[2]);
    let fruitsCount = Number(input[3]);
    let totalBgn = veggiePrice * veggieCount + fruitsPrice * fruitsCount;
    let totalEur = totalBgn / 1.94;
    totalEur = totalEur.toFixed(2);

    console.log(totalEur);
}

vegetableMarket(["0.194", "19.4", "10", "10"]);
vegetableMarket(["1.5", "2.5", "10", "10"]);
