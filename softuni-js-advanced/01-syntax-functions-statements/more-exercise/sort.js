function displayInformation(input) {
    let read = false;
    library.forEach(book => {
        if (book['title'] == input['title']) {
            read = true;
        }
    });
    if (read) {
        console.log(`Already read '${input['title']}' by ${input['author']}.`);
    } else {
        console.log(`You still need to read '${input['title']}' by ${input['author']}`);
    }

}

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation(
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
);