function inventory(input) {
    let heroes = [];

    input.forEach(el => {
        let [name, level, items] = el.split(" / ");
        let hero = {
            name,
            level: Number(level),
            items,
        };
        heroes.push(hero);
    });

    let sorted = heroes.sort((a, b) => a.level - b.level);

    sorted.forEach(el => {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    });

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);