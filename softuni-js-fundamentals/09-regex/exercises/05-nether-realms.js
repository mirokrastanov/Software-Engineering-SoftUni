function netherRealms(input) {
    let signedDemons = [];
    let splitDemonsRegex = /[, ]+/g;
    let demons = input.split(splitDemonsRegex);
    let healthRegex = /(?<hp>[^0-9+\-*\/.])/g;
    let dmgRegex = /(?<dmg>[+-]*[0-9]+[.]*[0-9]*)/g;
    let multiplierRegex = /(?<multiplier>[*\/])/g;

    for (let demon of demons) {
        let hpArray = demon.match(healthRegex);
        let dmgArray = demon.match(dmgRegex);
        let multiplierArray = demon.match(multiplierRegex);
        let demonHP = 0;
        let demonDMG = 0;
        if (hpArray) { demonHP = Number(hpArray.map(a => a.charCodeAt()).reduce((a, b) => a + b)) };
        if (dmgArray) { demonDMG = dmgArray.map(Number).reduce((a, b) => (a) + (b)) };
        if (multiplierArray) {
            for (let operation of multiplierArray) {
                switch (operation) {
                    case "*": demonDMG *= 2; break;
                    case "/": demonDMG /= 2; break;
                }
            }
        };
        let demonObject = {
            name: demon,
            hp: demonHP,
            dmg: demonDMG,
        };
        signedDemons.push(demonObject);
    }
    let sorted = signedDemons.sort((a,b) => a.name.localeCompare(b.name));

    sorted.forEach(demon => {
        console.log(`${demon.name} - ${demon.hp} health, ${demon.dmg.toFixed(2)} damage`);
    });
}

netherRealms("M3ph-0.5s-0.5t0.0**");
netherRealms("M3ph1st0**, Azazel");
netherRealms("Gos/ho");
netherRealms("M3ph1st0**,   Azazel");
netherRealms("M3ph1st0**,Azazel");