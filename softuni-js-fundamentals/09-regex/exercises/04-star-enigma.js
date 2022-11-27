function starEnigma(input) {
    let messages = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < messages; i++) {
        let encrypted = input[i];
        let starLetters = encrypted.match(/[star]/gi);
        let decrypted = null;
        if (starLetters) {
            decrypted = encrypted.split("").map(a => a.charCodeAt() - starLetters.length).map(a => String.fromCharCode(a)).join("");
        } else {
            decrypted = encrypted;
        }
        let regex = /@(?<planet>[A-Za-z]+)([^@\-!:>]*):(?<pop>\d+)([^@\-!:>]*)!(?<attackType>[A|D])!([^@\-!:>]*)\->(?<soldierCount>\d+)/g;
        let found = regex.exec(decrypted);
        if (!found) {
            continue;
        }
        switch (found.groups.attackType) {
            case "A":
                let attacked = {
                    planet: found.groups.planet,
                    population: found.groups.pop,
                    attackType: found.groups.attackType, 
                    soldierCount: found.groups.soldierCount,
                };
                attackedPlanets.push(attacked);
                break;
            case "D":
                let destroyed = {
                    planet: found.groups.planet,
                    population: found.groups.pop,
                    attackType: found.groups.attackType, 
                    soldierCount: found.groups.soldierCount,
                };
                destroyedPlanets.push(destroyed);
                break;
        }
    }
    let sortAttacked = attackedPlanets.sort((a, b) => a.planet.localeCompare(b.planet));
    let sortDestroyed = destroyedPlanets.sort((a, b) => a.planet.localeCompare(b.planet));

    console.log(`Attacked planets: ${sortAttacked.length}`);
    if (sortAttacked) {
        for (let el of sortAttacked) {
            console.log(`-> ${el.planet}`);
        }
    }
    console.log(`Destroyed planets: ${sortDestroyed.length}`);
    if (sortDestroyed) {
        for (let el of sortDestroyed) {
            console.log(`-> ${el.planet}`);
        }
    }
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);