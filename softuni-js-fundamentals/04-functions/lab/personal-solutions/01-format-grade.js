function formatGrade(grade) {

    let gradeType = "";
    if (grade < 3) {
        gradeType = "Fail";
    } else if (grade < 3.5) {
        gradeType = "Poor";
    } else if (grade < 4.5) {
        gradeType = "Good";
    } else if (grade < 5.5) {
        gradeType = "Very good";
    } else {
        gradeType = "Excellent";
    }

    if (grade < 3) {
        console.log(`${gradeType} (2)`);
    } else {
        console.log(`${gradeType} (${grade.toFixed(2)}) `);
    }
    
}

formatGrade(3.33);