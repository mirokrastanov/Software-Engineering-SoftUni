function hospital(input) {
    let index = 0;
    let medics = 7;
    let treated = 0;
    let untreated = 0;
    let days = Number(input[index]);
    index++;

    for (let day = 1; day <= days; day++) {
        if (day % 3 == 0) {
            if (untreated > treated) {
                medics++;
            }
        }
        let patients = Number(input[index]);
        index++;
        let diff = medics - patients;
        if (diff < 0) {
            untreated += Math.abs(diff);
            treated += (patients - Math.abs(diff));
        } else {
            treated += patients;
        }
    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);

}

hospital(['4',
    '7',
    '27',
    '9',
    '1'
])