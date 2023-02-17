class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity == 0) throw new Error('Not enough space in the collection.')
        this.books.push({ bookName, bookAuthor, 'payed': false });
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let bookIndex = this.findBookIndex(bookName);
        if (bookIndex == -1) throw new Error(`${bookName} is not in the collection.`);
        if (this.books[bookIndex]['payed'] == true) throw new Error(`${bookName} has already been paid.`);
        this.books[bookIndex]['payed'] = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        let bookIndex = this.findBookIndex(bookName);
        if (bookIndex == -1) throw new Error('The book, you\'re looking for, is not found.');
        if (!this.books[bookIndex]['payed']) throw new Error(`${bookName} need to be paid before removing from the collection.`);
        this.books.splice(bookIndex, 1);
        this.capacity++;
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let output = `The book collection has ${this.capacity} empty spots left.`;
            let sorted = this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));
            sorted.forEach(x => output += `\n${x.bookName} == ${x.bookAuthor} - ${x['payed'] ? 'Has Paid' : 'Not Paid'}.`);
            return output;
        }
        let filtered = this.books.filter(a => a.bookAuthor == bookAuthor);
        if (filtered.length == 0) throw new Error(`${bookAuthor} is not in the collection.`)
        let book = filtered[0];
        return `${book.bookName} == ${book.bookAuthor} - ${book['payed'] ? 'Has Paid' : 'Not Paid'}.`
    }
    findBookIndex(bookName) {
        let bookIndex = -1;
        this.books.slice().forEach((x, i) => x.bookName == bookName ? bookIndex = i : false );
        return bookIndex;
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// // console.log(library.payBook('Don Quixote'));
// console.log(library.addBook('Ulysses', 'James Joyce'));
// // The In Search of Lost Time, with an author Marcel Proust, collect.
// // The Don Quixote, with an author Miguel de Cervantes, collect.
// // Not enough space in the collection.


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));
// // In Search of Lost Time has been successfully paid.
// // Don Quixote is not in the collection.


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));
// // Don Quixote remove from the collection.
// // In Search of Lost Time need to be paid before removing from the collection.


// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));
// // The Don Quixote, with an author Miguel de Cervantes, collect.
// // Don Quixote == Miguel de Cervantes - Not Paid.


const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.
