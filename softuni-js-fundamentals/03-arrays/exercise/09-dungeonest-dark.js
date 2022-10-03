function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let rooms = arr[0].split("|");
    let bestRoom = 0;
    let died = false;

    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i];
        bestRoom++;
        let roomArray = currentRoom.split(" ");
        let type = roomArray[0];
        let value = Number(roomArray[1]);
        switch (type) {
            case 'potion':
                let currentDeficit = 100 - health;
                health += value;
                if (health > 100) {
                    health = 100;
                    value = currentDeficit;
                }
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += value;
                console.log(`You found ${value} coins.`);
                break;
            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${type}.`);
                } else {
                    console.log(`You died! Killed by ${type}.`);
                    died = true;
                }
                break;
        }
        if (died) {
            break;
        }
    }

    if (!died) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    } else {
        console.log(`Best room: ${bestRoom}`);
    }

}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);