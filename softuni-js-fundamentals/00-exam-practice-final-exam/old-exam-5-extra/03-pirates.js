function pirates(input) {
    let sail = false;
    let finish = false;
    let cities = {};

    while (input.length > 0) {
        let command = input.shift();
        if (command == "Sail") {
            sail = true;
        } else if (command == "End") {
            finish = true;
            if (Object.entries(cities).length > 0) {
                console.log(`Ahoy, Captain! There are ${Object.entries(cities).length} wealthy settlements to go to:`);
                for (const [city, info] of Object.entries(cities)) {
                    console.log(`${city} -> Population: ${info[0]} citizens, Gold: ${info[1]} kg`);
                }
            } else {
                console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
            }
            break;
        } else {
            if (!sail) {
                let [city, pop, gold] = command.split("||");
                if (!cities[city]) {
                    cities[city] = [Number(pop), Number(gold)];
                } else {
                    cities[city][0] += Number(pop);
                    cities[city][1] += Number(gold);
                }
            } else {
                let [activity, city, v1, v2] = command.split("=>");
                switch (activity) {
                    case "Plunder":
                        let casualties = Number(v1);
                        let goldStolen = Number(v2);
                        if (casualties > cities[city][0]) {
                            casualties = cities[city][0];
                        }
                        if (goldStolen > cities[city][1]) {
                            goldStolen = cities[city][0];
                        }
                        cities[city][0] -= casualties;
                        cities[city][1] -= goldStolen;
                        console.log(`${city} plundered! ${goldStolen} gold stolen, ${casualties} citizens killed.`);
                        if (cities[city][0] <= 0 || cities[city][1] <= 0) {
                            delete cities[city];
                            console.log(`${city} has been wiped off the map!`);
                        }
                        break;
                    case "Prosper":
                        let goldGained = Number(v1);
                        if (goldGained < 0) {
                            console.log("Gold added cannot be a negative number!");
                        } else {
                            cities[city][1] += goldGained;
                            console.log(`${goldGained} gold added to the city treasury. ${city} now has ${cities[city][1]} gold.`);
                        }
                        break;
                }
            }
        }
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);