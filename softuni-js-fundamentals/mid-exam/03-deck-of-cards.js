function deckOfCards(inputArr) {
    let workingArr = inputArr.slice();
    let cards = workingArr.shift().split(", ");
    let commandsCount = Number(workingArr.shift());
    let commands = workingArr.splice(0);

    while (commands.length > 0) {
        let command = commands.shift().split(", ");
        let type = command.shift();
        let value1 = command.shift();
        let value2 = command.shift();

        switch (type) {
            case "Add":
                let toAdd = cards.includes(value1);
                if (!toAdd) {
                    cards.push(value1);
                    console.log("Card successfully added");
                } else {
                    console.log("Card is already in the deck");
                }
                break;
            case "Remove":
                let toRemove = cards.includes(value1);
                if (toRemove) {
                    let removeAt = cards.indexOf(value1);
                    cards.splice(removeAt, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Card not found");
                }
                break;
            case "Remove At":
                let removeIndex = Number(value1);
                if (removeIndex >= 0 && removeIndex < cards.length) {
                    cards.splice(removeIndex, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Index out of range");
                }
                break;
            case "Insert":
                let insertAt = Number(value1);
                let toInsert = value2;
                if (insertAt >= 0 && insertAt < cards.length) {
                    let cardIn = cards.includes(toInsert);
                    if (!cardIn) {
                        cards.splice(insertAt, 0, toInsert);
                        console.log("Card successfully added");
                    } else {
                        console.log("Card is already added");
                    }
                } else {
                    console.log("Index out of range");
                }
                break;
        }
    }
    console.log(cards.join(", "));

}

deckOfCards([
    "Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"
]);
deckOfCards([
    "Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
    "2",
    "Add, Two of Clubs",
    "Remove, Five of Hearts"
]);
deckOfCards([
    "Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"
]);