function degustationParty(input) {
    let liked = {};
    let disliked = {};

    while (input.length > 0) {
        let [command, guest, meal] = input.shift().split("-");
        switch (command) {
            case "Like":
                if (!liked[guest]) {
                    liked[guest] = [];
                    liked[guest].push(meal);
                } else {
                    if (liked[guest].indexOf(meal) == -1) {
                        liked[guest].push(meal);
                    }
                }
                // console.log(liked[guest]);
                break;
            case "Dislike":
                if (liked[guest]) {
                    if (liked[guest].indexOf(meal) != -1) {
                        disliked[guest] = [];
                        disliked[guest].push(meal);
                        liked[guest] = liked[guest].filter(a => a != meal);
                        console.log(`${guest} doesn't like the ${meal}.`);
                    } else {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    }
                } else {
                    console.log(`${guest} is not at the party.`);
                }
                break;
            case "Stop":
                let dislikedCount = 0;
                for (let el of Object.entries(liked)) {
                    let guest = el[0];
                    let likedMeals = el[1];
                    let output = `${guest}: `;
                    for (let i = 0; i <= likedMeals.length - 1; i++) {
                        let meal = likedMeals[i];
                        output += `${meal}`;
                        if (i != likedMeals.length - 1) {
                            output += ", ";
                        }
                    }
                    console.log(output);
                    if (disliked[guest]) {
                        dislikedCount += disliked[guest].length;
                    }
                }
                console.log(`Unliked meals: ${dislikedCount}`);
                break;
        }
    }
}
degustationParty(["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"]);
degustationParty(["Like-Krisi-shrimps",
"Dislike-Vili-carp",
"Dislike-Krisi-salad",
"Stop"]);
degustationParty(["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"]);