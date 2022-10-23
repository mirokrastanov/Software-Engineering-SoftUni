function memoryGame(inputArr) {
    let workingArr = inputArr.slice();
    let sequence = workingArr.shift().split(" ");
    let commands = workingArr.splice(0);
    let moves = 0;
    let finish = false;

    while (commands.length > 0) {
        moves++;
        let command = commands.shift().split(" ");
        if (command == "end") {
            finish = true;
            break;
        } else {
            command = command.map(Number);
        }
        let index1 = command.shift();
        let index2 = command.shift();
        if (
            index1 == index2
            || (index1 < 0 || index1 > sequence.length - 1)
            || (index2 < 0 || index2 > sequence.length - 1)
        ) {
            sequence.splice((Math.ceil(sequence.length / 2)), 0, `-${moves}a`, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else {
            if (sequence[index1] == sequence[index2]) {
                let match = sequence[index1];
                if (index1 > index2) {
                    sequence.splice(index1, 1);
                    sequence.splice(index2, 1);
                } else {
                    sequence.splice(index2, 1);
                    sequence.splice(index1, 1);
                }
                console.log(`Congrats! You have found matching elements - ${match}!`);
            } else {
                console.log("Try again!");
            }
            if (sequence.length == 0) {
                console.log(`You have won in ${moves} turns!`);
                break;
            }
        }
    }
    if (finish) {
        if (sequence.length != 0) {
            console.log(`Sorry you lose :(`);
            console.log(sequence.join(" "));
        }
    }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);