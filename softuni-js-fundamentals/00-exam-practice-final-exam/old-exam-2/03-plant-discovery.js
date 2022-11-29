function plantDiscovery(input) {
    let quantity = Number(input.shift());
    let commands = input.splice(0);
    let plants = {};
    let ratings = {};

    for (let i = 0; i < quantity; i++) {
        let command = commands.shift();
        let [plant, rarity] = command.split("<->");
        plants[plant] = Number(rarity);
        ratings[plant] = [];
    }

    while (commands.length > 0) {
        let command = commands.shift();
        if (command == "Exhibition") {
            console.log("Plants for the exhibition:");
            let plantsArr = Object.entries(plants);
            let ratingsArr = Object.entries(ratings);
            for (let i = 0; i < plantsArr.length; i++) {
                let avgRatingArr = ratingsArr[i][1];
                let avgRating = 0;
                if (avgRatingArr.length == 0) {
                    avgRating = 0;
                } else {
                    let sum = avgRatingArr.reduce((a,b) => a + b);
                    avgRating = sum / avgRatingArr.length;
                }
                console.log(`- ${plantsArr[i][0]}; Rarity: ${plantsArr[i][1]}; Rating: ${avgRating.toFixed(2)}`);                
            }
            break;
        }
        let [type, info] = command.split(": ");
        let [plant, value1] = info.split(" - ");
        if (!plants[plant]) {
            console.log("error");
        } else {
            switch (type) {
                case "Rate":
                    ratings[plant].push(Number(value1));
                    break;
                case "Update":
                    plants[plant] = Number(value1);
                    break;
                case "Reset":
                    ratings[plant] = [];
                    break;
            }
        }
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);