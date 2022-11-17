function inventory(input) {
    let commands = input.slice();
    let heroes = [];
    
    while (commands.length > 0) {
        let command = commands.shift().split(" / ");
        let heroName = command.shift();
        let heroLevel = Number(command.shift());
        let heroItems = command.shift();
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };
        heroes.push(hero);
    }
    let sortedHeroes = heroes.sort((a,b) => (a.level > b.level) ? 1 : -1);
    for (let hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);