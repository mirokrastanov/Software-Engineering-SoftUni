function lunchBreak(input) {
    let showName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunchDuration = (1/8) * breakDuration;
    let restDuration = (1/4) * breakDuration;
    let remainingTime = breakDuration - lunchDuration - restDuration;
    if (remainingTime >= episodeDuration) {
        let leftoverTime = remainingTime - episodeDuration;
        console.log(`You have enough time to watch ${showName} and left with ${Math.ceil(leftoverTime)} minutes free time.`);
    } else {
        let notEnough = episodeDuration - remainingTime;
        console.log(`You don't have enough time to watch ${showName}, you need ${Math.ceil(notEnough)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
