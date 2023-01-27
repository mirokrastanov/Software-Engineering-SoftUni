function heroes() {
    const create = {
        mage,
        fighter,
    };
    function fighter(name) {
        const hero = {
            name,
            health: 100,
            stamina: 100,
            fight,
        };
        function fight() {
            hero.stamina--;
            console.log(`${hero.name} slashes at the foe!`);
        }
        return hero;
    }
    function mage(name) {
        const hero = {
            name,
            health: 100,
            mana: 100,
            cast,
        };
        function cast(spell) {
            hero.mana--;
            console.log(`${hero.name} cast ${spell}`);
        }
        return hero;
    }
    return create;
}


let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);

