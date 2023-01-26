function heroicInventory(arr) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = Number(level);
            this.items = items;
        }
    }
    let heroes = [];
    arr.forEach(hero => {
        let [name, level, items] = hero.split(" / ");
        items = items ? items.split(", ") : [];
        heroes.push(new Hero(name, level, items));
    });
    // console.log(JSON.stringify(heroes));
    return JSON.stringify(heroes);
}

// heroicInventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]);
// heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
heroicInventory(['Jake / 1000']);