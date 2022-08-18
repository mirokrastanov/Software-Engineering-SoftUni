function oldBooks(input) {
    let booksChecked = 0;
    index = 0;
    let favBook = input[index];
    index++;
    let currentBook = input[index];
    index++;

    while (currentBook !== "No More Books") {

        if (currentBook === favBook) {
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        } else {
            booksChecked++;
        }
        currentBook = input[index];
        index++;
        if (currentBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${booksChecked} books.`);
            break;
        }
    }

}

oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);
oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);
