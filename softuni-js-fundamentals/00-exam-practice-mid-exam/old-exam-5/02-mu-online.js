function muOnline(input) {
    let health = 100;
    let coins = 0;
    let rooms = input.split("|");
    let died = false;
    let room = 0;

    while (rooms.length > 0) {
        room++;
        let current = rooms.shift().split(" ");
        let command = current.shift();
        let value = Number(current.shift());
        switch (command) {
            case "potion":
                let healed = value;
                let initial = health;
                health += value;
                if (health > 100) {
                    healed = 100 - initial;
                    health = 100;
                }
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                if (health - value > 0) {
                    health -= value;
                    console.log(`You slayed ${command}.`);
                } else {
                    health = 0;
                    console.log(`You died! Killed by ${command}.`);
                    died = true;
                }
                break;
        }
        if (died) {
            break;
        }
    }
    if (died) {
        console.log(`Best room: ${room}`);
    } else {
        console.log("You've made it!");
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");