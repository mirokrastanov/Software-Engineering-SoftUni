function examPrep(input) {
    index = 0;
    let badGradesToFail = Number(input[index]);
    let badGradesCounter = 0;
    let nameCounter = 0;
    let gradeTotal = 0;
    index++;
    let name = input[index];
    index++;
    nameCounter++;
    let grade = Number(input[index]);
    index++;

    while (name !== "Enough") {
        if (grade <= 4) {
            badGradesCounter++;
        }
        if (badGradesCounter >= badGradesToFail) {
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            break;
        }
        gradeTotal += grade;
        name = input[index];
        if (name === "Enough") {
            name = input[index - 2]
            let avgScore = gradeTotal / nameCounter;
            console.log(`Average score: ${avgScore.toFixed(2)}`);
            console.log(`Number of problems: ${nameCounter}`);
            console.log(`Last problem: ${name}`);
            break;
        }
        index++;
        nameCounter++;
        grade = Number(input[index]);
        index++
    }
}

examPrep(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);
examPrep(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);

