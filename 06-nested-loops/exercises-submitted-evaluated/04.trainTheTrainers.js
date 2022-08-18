function trainTheTrainers(input) {
    let index = 0;
    let juryMemberCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let finalGrade = 0;
    let totalGrades = 0;
    
    while (command !== "Finish") {
        let presentationName = command;
        let avgGrade = 0;
        let gradesPer = 0;

        for (gradesPer = 0; gradesPer < juryMemberCount; gradesPer++) {
            let currentGrade = Number(input[index]);
            avgGrade += currentGrade;
            finalGrade += currentGrade;
            totalGrades++;
            index++;
        }
        avgGrade /= gradesPer;

        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);

        command = input[index];
        index++;
    }
    finalGrade /= totalGrades;
    console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`);

}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"]);
    trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"]);
    