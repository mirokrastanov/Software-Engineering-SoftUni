function employees(input) {
    let list = [];

    function createEntry(name) {
        let phone = name.length;
        let person = {
            [name]: phone,
        };
        return person;
    }

    input.forEach(element => {
        list.push(createEntry(element));
    });

    list.forEach(element => {
        let name = Object.keys(element);
        let phone = Object.values(element);
        console.log(`Name: ${name} -- Personal Number: ${phone}`);
    });

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