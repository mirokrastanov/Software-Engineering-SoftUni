function balls(input) {
    index = 0;
    let balls = Number(input[index]);
    index++;
    let totalPoints = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let otherColors = 0;

    for (index; index < input.length; index++) {
        let color = input[index];
        switch (color) {
            case "red": totalPoints += 5; red += 1; break;
            case "orange": totalPoints += 10; orange += 1; break;
            case "yellow": totalPoints += 15; yellow += 1; break;
            case "white": totalPoints += 20; white += 1; break;
            case "black": totalPoints /= 2; totalPoints = Math.floor(totalPoints); black += 1; break;
            default: otherColors += 1; break;
        }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${black}`);

}

balls(["3",
    "white",
    "black",
    "pink"]);
balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"]);

