function pcGameShop(input) {
    let gamesSold = Number(input[0]);
    let gameName = "";
    let hearthstonePercent = 0;
    let hearthstoneCount = 0;
    let fornitePercent = 0;
    let forniteCount = 0;
    let overwatchPercent = 0;
    let overwatchCount = 0;
    let othersPercent = 0;
    let othersCount = 0;


    for (let i = 1; i < input.length; i++) {
        gameName = String(input[i]);
        switch (gameName) {
            case "Hearthstone":
                hearthstoneCount += 1;
                break;
            case "Fornite":
                forniteCount += 1;
                break;
            case "Overwatch":
                overwatchCount += 1;
                break;
            default:
                othersCount += 1;
                break;
        }
    }
    hearthstonePercent = hearthstoneCount / gamesSold * 100;
    fornitePercent = forniteCount / gamesSold * 100;
    overwatchPercent = overwatchCount / gamesSold * 100;
    othersPercent = othersCount / gamesSold * 100;
    console.log(`Hearthstone - ${hearthstonePercent.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercent.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercent.toFixed(2)}%`);
    console.log(`Others - ${othersPercent.toFixed(2)}%`);


}

pcGameShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"]);
pcGameShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"]);

