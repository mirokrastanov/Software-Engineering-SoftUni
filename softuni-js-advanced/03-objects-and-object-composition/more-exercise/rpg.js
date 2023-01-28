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
const heroSM = create.mage("Jettik");
heroSM.cast("Frostbolt")
heroSM.cast("Thunderstrike")
heroSM.cast("Lightning Surge")
const heroMF = create.fighter("Ragnaros");
heroMF.fight()
console.log(heroMF.stamina);
heroSM.cast()
console.log(heroSM.mana);
console.log(heroMF.stamina);
heroMF.fight()
