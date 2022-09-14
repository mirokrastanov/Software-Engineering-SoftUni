function grades(input) {
    let students = Number(input[0]);
    let veryBadStudents = 0;
    let badStudents = 0;
    let goodStudents = 0;
    let veryGoodStudents = 0;
    let sumGrades = 0;

    for (let student = 1; student <= students; student++) {
        let studentGrade = Number(input[student]);
        sumGrades += studentGrade;
        if (studentGrade >= 2 && studentGrade < 3) {
            veryBadStudents++;
        } else if (studentGrade < 4) {
            badStudents++;
        } else if (studentGrade < 5) {
            goodStudents++;
        } else if (studentGrade >= 5) {
            veryGoodStudents++;
        }
    }
    let avgGrade = sumGrades / students;
    console.log(`Top students: ${(veryGoodStudents / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(goodStudents / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(badStudents / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(veryBadStudents / students * 100).toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}

grades(['10',
    '3.00',
    '2.99',
    '5.68',
    '3.01',
    '4',
    '4',
    '6.00',
    '4.50',
    '2.44',
    '5'
])