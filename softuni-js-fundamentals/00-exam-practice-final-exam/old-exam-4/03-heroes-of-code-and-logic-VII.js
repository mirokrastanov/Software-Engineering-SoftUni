function heroesOfCode(input) {
    let numberOfHeroes = Number(input.shift());
    let heroes = {};
    for (let i = 0; i < numberOfHeroes; i++) {
        let [hero, hp, mp] = input.shift().split(" ");
        heroes[hero] = {
            hero,
            hp: Number(hp),
            mp: Number(mp),
        };
    }
    let commands = input.splice(0);
    while (commands.length > 0) {
        let [command, hero, v1, v2] = commands.shift().split(" - ");
        if (command == "End") {
            for (let [_, hero] of Object.entries(heroes)) {
                console.log(hero.hero);
                console.log(`  HP: ${hero.hp}`);
                console.log(`  MP: ${hero.mp}`);
            }
            break;
        }
        switch (command) {
            case "CastSpell":
                let mpNeeded = Number(v1);
                let spellName = v2;
                if (heroes[hero].mp >= mpNeeded) {
                    heroes[hero].mp -= mpNeeded;
                    console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`);
                } else {
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case "TakeDamage":
                let dmgTaken = Number(v1);
                let attacker = v2;
                if (heroes[hero].hp - dmgTaken > 0) {
                    heroes[hero].hp -= dmgTaken;
                    console.log(`${hero} was hit for ${dmgTaken} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
                } else {
                    delete heroes[hero];
                    console.log(`${hero} has been killed by ${attacker}!`);
                }
                break;
            case "Recharge":
                let mpReceived = Number(v1);
                if (heroes[hero].mp + mpReceived > 200) {
                    let initial = heroes[hero].mp;
                    heroes[hero].mp = 200;
                    mpReceived = 200 - initial;
                } else {
                    heroes[hero].mp += mpReceived;
                }
                console.log(`${hero} recharged for ${mpReceived} MP!`);
                break;
            case "Heal":
                let hpReceived = Number(v1);
                if (heroes[hero].hp + hpReceived > 100) {
                    let initial = heroes[hero].hp;
                    heroes[hero].hp = 100;
                    hpReceived = 100 - initial;
                } else {
                    heroes[hero].hp += hpReceived;
                }
                console.log(`${hero} healed for ${hpReceived} HP!`);
                break;
        }
    }
}

heroesOfCode([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
heroesOfCode([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);