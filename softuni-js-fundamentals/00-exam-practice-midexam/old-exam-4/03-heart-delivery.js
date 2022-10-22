function heartDelivery(inputArr) {
    let workingArr = inputArr.slice();
    let neighborhood = workingArr.shift().split("@").map(Number);
    let commands = workingArr.splice(0);
    let love = false;
    let position = 0;
    let positions = [];

    while (commands.length > 0) {
        let command = commands.shift().split(" ");
        let type = command.shift();
        let jump = Number(command.shift());
        if (position + jump > neighborhood.length - 1) {
            position = 0;
        } else {
            position = position + jump;
        }
        switch (type) {
            case "Love!":
                love = true;
                break;
            case "Jump":
                if (neighborhood[position] > 0) {
                    neighborhood[position] -= 2;
                    if (neighborhood[position] <= 0) {
                        neighborhood[position] = 0;
                        console.log(`Place ${position} has Valentine's day.`);
                    }
                } else {
                    console.log(`Place ${position} already had Valentine's day.`);
                }
                break;
        }
        if (love) {
            break;
        }
        positions.push(position);
    }
    let noValentine = neighborhood.filter(a => a != 0);
    let lastPosition = positions.pop();
    console.log(`Cupid's last position was ${lastPosition}.`);
    if (noValentine.length == 0) {
        console.log("Mission was successful.");
    } else if (noValentine.length > 0) {
        console.log(`Cupid has failed ${noValentine.length} places.`);
    }

}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);