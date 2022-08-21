function graduation(input) {
    let name = String(input[0]);
    let year = 1;
    let yearlyGrade = Number(input[year]);
    let sumGrades = 0;
    let avgGrade = 0;
    let failures = 0;

    while (year <= 12) {
        if (yearlyGrade < 4) {
            failures += 1;
        }
        if (failures > 1) {
            console.log(`${name} has been excluded at ${year - 1} grade`);
            break;
        }
        sumGrades += yearlyGrade;
        avgGrade = sumGrades / year;
        if (year === 12) {
            console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
            break;
        }
        year++;
        yearlyGrade = Number(input[year]);
    }

}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);

