function bonusScoringSystem(inputArr) {
    let workingArr = inputArr.slice();
    let students = Number(workingArr.shift());
    let lectures = Number(workingArr.shift());
    let bonus = Number(workingArr.shift());
    let attendance = workingArr.splice(0).map(Number);
    let maxBonus = 0;
    let maxAttendance = 0;

    while (attendance.length > 0) {
        let current = attendance.shift();
        let totalBonus = current / lectures * (5 + bonus);
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            maxAttendance = current;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);

}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);