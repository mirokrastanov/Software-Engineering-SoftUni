function legendaryFarming(input) {
    let items = {};
    let commands = input.split(" ");
    let obtained = false;

    while (commands.length > 0 && !obtained) {
        let quantity = Number(commands.shift());
        let material = commands.shift().toLowerCase();
        if (items[material]) {
            items[material] += quantity;
        } else {
            items[material] = quantity;
        }
        if (items[material] >= 250) {
            switch (material) {
                case "motes":
                    obtained = true;
                    items[material] -= 250;
                    console.log('Dragonwrath obtained!');
                    break;
                case "shards":
                    obtained = true;
                    items[material] -= 250;
                    console.log('Shadowmourne obtained!');
                    break;
                case "fragments":
                    obtained = true;
                    items[material] -= 250;
                    console.log('Valanyr obtained!');
                    break;
            }
        }
    }

    if (obtained) {
        let keyItems = {
            "motes": 0,
            "shards": 0,
            "fragments": 0,
        };
        let junk = {};
        for (let [material, quantity] of Object.entries(items)) {
            switch (material) {
                case "motes":
                    keyItems[material] += quantity;
                    break;
                case "shards":
                    keyItems[material] += quantity;
                    break;
                case "fragments":
                    keyItems[material] += quantity;
                    break;
                default:
                    junk[material] = quantity;
                    break;
            }
        }
        let sortKeyItems = Object.entries(keyItems).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        let sortJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));
        for (let [material, quantity] of sortKeyItems) {
            console.log(`${material}: ${quantity}`);
        }
        for (let [material, quantity] of sortJunk) {
            console.log(`${material}: ${quantity}`);
        }
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');