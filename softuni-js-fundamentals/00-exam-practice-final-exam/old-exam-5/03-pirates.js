function pirates(input) {
    let cities = {};
    
    while (input.length > 0) {
        let [city, population, gold] = input.shift().split("||");
        if (city == "Sail") {
            break;
        }
        if (!cities.hasOwnProperty(city)) {
            cities[city] = [];
            cities[city].push(city);
            cities[city].push(Number(population));
            cities[city].push(Number(gold));
        } else {
            cities[city][1] += Number(population);
            cities[city][2] += Number(gold);
        }
    }

    while (input.length > 0) {
        let [command, city, v1, v2] = input.shift().split("=>");
        switch (command) {
            case "Plunder":
                if (cities[city]) {
                    let casualties = Number(v1);
                    let plunderedGold = Number(v2);
                    cities[city][1] -= casualties;
                    cities[city][2] -= plunderedGold;
                    console.log(`${city} plundered! ${plunderedGold} gold stolen, ${casualties} citizens killed.`);
                }
                if (cities[city][1] <= 0 || cities[city][2] <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    delete cities[city];
                }
                break;
            case "Prosper":
                let goldIncome = Number(v1);
                if (goldIncome < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    cities[city][2] += goldIncome;
                    console.log(`${goldIncome} gold added to the city treasury. ${city} now has ${cities[city][2]} gold.`);
                }
                break;
            case "End":
                if (Object.entries(cities).length > 0) {
                    let count = Object.entries(cities).length;
                    console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
                    for (let [city, details] of Object.entries(cities)) {
                        console.log(`${city} -> Population: ${details[1]} citizens, Gold: ${details[2]} kg`);
                    }
                } else {
                    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
                }
                break;
        }
    }
}

pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]));
pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]));