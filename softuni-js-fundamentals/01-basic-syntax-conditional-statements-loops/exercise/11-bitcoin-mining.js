function bitcoinMining(input) {
    let firstPurchase = false;
    let totalGoldValue = 0;
    let firstDayOfPurchase = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let bitcoinsPurchased = 0;

    for (let i = 0; i < input.length; i++) {
        let day = i + 1;
        let dailyGold = Number(input[i]);
        if (day % 3 == 0) {
            dailyGold *= 0.7;
        }
        let dailyGoldValue = dailyGold * goldPrice;
        totalGoldValue += dailyGoldValue;
        if (!firstPurchase && totalGoldValue - bitcoinPrice >= 0) {
            firstDayOfPurchase = day;
            firstPurchase = true;
        }
        while (totalGoldValue - bitcoinPrice >= 0) {
            totalGoldValue -= bitcoinPrice;
            bitcoinsPurchased++;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsPurchased}`);
    if (firstPurchase) {
        console.log(`Day of the first purchased bitcoin: ${firstDayOfPurchase}`);
    }
    console.log(`Left money: ${totalGoldValue.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300]);