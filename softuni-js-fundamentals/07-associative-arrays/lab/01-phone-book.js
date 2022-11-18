function phoneBook(input) {
    let phones = {};

    input.forEach(element => {
        let [name, phone] = element.split(" ");
        phones[name] = phone;
    });
    for (let key in phones) {
        console.log(`${key} -> ${phones[key]}`);
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
