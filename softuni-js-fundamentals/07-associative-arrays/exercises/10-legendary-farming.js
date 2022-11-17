function legendaryFarming(input) {
    let materials = {};
    let commands = input.split(" ");
    let winner = "";
    let finish = false;

    function addMaterial(material, quantity, materials) {
        if (materials[material]) {
            materials[material] += quantity;
        } else {
            materials[material] = quantity;
        }
        return materials;
    }
    function haveWinner(material, materials) {
        if (materials[material] >= 250) {
            if (material != "shards" && material != "motes" && material != "fragments") {
                return "";
            } else {
                return material;
            }
        } else {
            return "";
        }
    }
    function mainMats(material, materials) {
        if (materials[material]) {
            return materials[material];
        } else {
            return 0;
        }
    }

    while (commands.length > 0) {
        let quantity = Number(commands.shift());
        let material = (commands.shift()).toLowerCase();

        addMaterial(material, quantity, materials);
        winner = haveWinner(material, materials);

        if (winner != "") {
            finish = true;
            switch (winner) {
                case "shards": winner = "Shadowmourne"; materials[material] -= 250; break;
                case "fragments": winner = "Valanyr"; materials[material] -= 250; break;
                case "motes": winner = "Dragonwrath"; materials[material] -= 250; break;
            }
        }
        if (finish) {
            console.log(`${winner} obtained!`);
            break;
        }
    }

    let mainMaterials = {
        "shards": mainMats("shards", materials),
        "fragments": mainMats("fragments", materials),
        "motes": mainMats("motes", materials),
    };

    delete materials["shards"];
    delete materials["fragments"];
    delete materials["motes"];

    let mainSorted = Object.entries(mainMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let offSorted = Object.entries(materials).sort((a, b) => a[0].localeCompare(b[0]));
    
    mainSorted.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });
    
    offSorted.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });

}

// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
legendaryFarming('555 stones 5 Shards 6 leathers 25 fragments 7 Shards');
