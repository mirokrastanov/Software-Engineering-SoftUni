function cardGame(input) {
    let people = input.slice();
    let hands = {};
    let scores = {};

    while (people.length > 0) {
        let current = people.shift().split(": ");
        let person = current.shift();
        let cards = current.join("").split(", ");
        if (hands[person]) {
            for (let card of cards) {
                hands[person].push(card);
            }
        } else {
            hands[person] = cards;
        }
    }

    for (let person in hands) {
        let cards = hands[person].slice();
        cards = cards.filter((el, i, arr) => arr.indexOf(el) == i);
        let score = 0;

        while (cards.length > 0) {
            let card = cards.shift().split("");
            let type = card.pop();
            let power = card.join("");
            switch (power) {
                case "J": power = 11; break;
                case "Q": power = 12; break;
                case "K": power = 13; break;
                case "A": power = 14; break;
                default: power = Number(power); break;
            }
            switch (type) {
                case "S": type = 4; break;
                case "H": type = 3; break;
                case "D": type = 2; break;
                case "C": type = 1; break;
            }
            score += (type * power);
        }
        scores[person] = score;
    }

    for (let key in scores) {
        console.log(`${key}: ${scores[key]}`);
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);