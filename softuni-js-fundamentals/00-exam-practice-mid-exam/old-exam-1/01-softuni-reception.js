function softuniReception(inputArr) {
    inputArr = inputArr.map(Number);
    let emp1rate = inputArr[0];
    let emp2rate = inputArr[1];
    let emp3rate = inputArr[2];
    let students = inputArr[3];
    let studentsLeft = students;
    let hours = 0;

    while (studentsLeft > 0) {
        hours++;
        if (hours % 4 == 0) {
            continue;
        }
        studentsLeft -= (emp1rate + emp2rate + emp3rate);
    }
    console.log(`Time needed: ${hours}h.`);

}

softuniReception(['5', '6', '4', '20']);
softuniReception(['1', '2', '3', '45']);
softuniReception(['3', '2', '5', '40']);