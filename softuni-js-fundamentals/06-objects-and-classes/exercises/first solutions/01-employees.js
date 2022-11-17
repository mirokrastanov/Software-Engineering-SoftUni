function employees(input) {

    for (const entry of input) {
        let personalInfo = {
            name: entry,
            number: entry.length
        };
        console.log(`Name: ${personalInfo.name} -- Personal Number: ${personalInfo.number}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);