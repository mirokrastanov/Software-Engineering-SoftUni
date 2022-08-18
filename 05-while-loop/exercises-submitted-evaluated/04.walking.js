function walking(input) {
    let index = 0;
    let target = 10000;
    let totalSteps = 0;
    let currentSteps = input[index];
    if (currentSteps !== "Going home") {
        currentSteps = Number(currentSteps);
        totalSteps += currentSteps;
    } else {
        index++
        currentSteps = Number(input[index]);
        totalSteps += currentSteps;
        if (totalSteps >= target) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - target} steps over the goal!`);
            return;
        } else {
            console.log(`${target - totalSteps} more steps to reach goal.`);
            return;
        }
    }
    index++;

    while (index <= input.length) {
        if (totalSteps >= target) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - target} steps over the goal!`);
            break;
        }
        currentSteps = input[index];
        if (currentSteps !== "Going home") {
            currentSteps = Number(currentSteps);
            totalSteps += currentSteps;
        } else {
            index++
            currentSteps = Number(input[index]);
            totalSteps += currentSteps;
            if (totalSteps >= target) {
                console.log(`Goal reached! Good job!`);
                console.log(`${totalSteps - target} steps over the goal!`);
                break;
            } else {
                console.log(`${target - totalSteps} more steps to reach goal.`);
                break;
            }
        }
        index++;
    }

}

walking(["1000",
    "1500",
    "2000",
    "6500"]);
walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"]);
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"]);
walking(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"]);
