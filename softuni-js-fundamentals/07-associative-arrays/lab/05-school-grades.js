function schoolGrades(input) {
    let students = {};
    let avgScores = {};

    input.forEach(element => {
        let command = element.split(" ");
        let student = command.shift();
        let grades = command.map(Number);
        if (students[student]) {
            grades.forEach(element => {
                students[student].push(element);
            });
        } else {
            students[student] = grades;
        }
    });

    for (let [student, grades] of Object.entries(students)) {
        let gpa = 0;
        let counter = 0;
        grades.forEach(element => {
            counter++;
            gpa += element;
        });
        gpa /= counter;
        avgScores[student] = gpa;
    }

    let sorted = Object.entries(avgScores).sort((a, b) => a[0].localeCompare(b[0]));
    
    sorted.forEach((student) => {
        console.log(`${student[0]}: ${student[1].toFixed(2)}`);
    });
    
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);