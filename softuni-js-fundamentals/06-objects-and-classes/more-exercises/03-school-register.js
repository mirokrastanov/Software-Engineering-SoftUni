function schoolRegister(input) {
    let workingArr = input.slice();
    let students = [];
    
    while (workingArr.length > 0) {
        let entry = workingArr.shift().split(" ");
        let name = entry[2].split("").filter(a => a != ",").join("");
        let grade = Number(entry[4].split("").filter(a => a != ",").join(""));
        let gpa = Number(entry[10]);
        let student = {
            name,
            grade,
            gpa,
        };
        students.push(student);
    }

    students.sort((a,b) => (a.grade - b.grade));  // sort by current Grade
    students = students.filter(a => a.gpa >= 3);  // filter out drop-outs

    let currentGrade = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade != currentGrade) {
            currentGrade = students[i].grade;
            console.log(`${(currentGrade + 1)} Grade`);
        }
        let gradeArr = [];
        let gpaArr = [];
        for (let j = 0; j < students.length; j++) {
            if (students[j].grade == currentGrade) {
                gradeArr.push(students[j].name);
                gpaArr.push(students[j].gpa);
            }
        }    
        let studentsHere = gradeArr.length;
        let avgGPAforClass = gpaArr.reduce((a,b) => a + b);
        avgGPAforClass /= studentsHere; 
        console.log(`List of students: ${gradeArr.join(", ")}`);
        console.log(`Average annual score from last year: ${avgGPAforClass.toFixed(2)}`);
        console.log("");
        i += studentsHere - 1;
    }

}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);
schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);