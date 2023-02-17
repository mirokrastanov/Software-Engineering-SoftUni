const bookSelection = require('./bookSelection');
const { expect, assert } = require('chai');

describe('Testing -> bookSelection', () => {
    it('Testing -> isGenreSuitable', () => {
        expect(bookSelection.isGenreSuitable('Horror', '7')).to.equal('Books with Horror genre are not suitable for kids at 7 age');
        expect(bookSelection.isGenreSuitable('Horror', 3)).to.equal('Books with Horror genre are not suitable for kids at 3 age');
        expect(bookSelection.isGenreSuitable('Horror', 2.4)).to.equal('Books with Horror genre are not suitable for kids at 2.4 age');
        expect(bookSelection.isGenreSuitable('Horror', -14)).to.equal('Books with Horror genre are not suitable for kids at -14 age');
        expect(bookSelection.isGenreSuitable('Thriller', -14)).to.equal('Books with Thriller genre are not suitable for kids at -14 age');
        expect(bookSelection.isGenreSuitable('Comedy', 4)).to.equal('Those books are suitable');
        expect(bookSelection.isGenreSuitable('Comedy', true)).to.equal('Those books are suitable');
        expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        expect(bookSelection.isGenreSuitable('Comedy', 12.1)).to.equal('Those books are suitable');
        expect(bookSelection.isGenreSuitable(2, 12.1)).to.equal('Those books are suitable');
        expect(bookSelection.isGenreSuitable(12.1)).to.equal('Those books are suitable');
        expect(bookSelection.isGenreSuitable('Comedy', [])).to.equal('Those books are suitable');
    });
    it('Testing -> isItAffordable', () => {
        expect(() => { bookSelection.isItAffordable('', 10) }).to.throw('Invalid input');
        expect(() => { bookSelection.isItAffordable('', '') }).to.throw('Invalid input');
        expect(() => { bookSelection.isItAffordable(5, '3') }).to.throw('Invalid input');
        expect(() => { bookSelection.isItAffordable(7) }).to.throw('Invalid input');
        expect(bookSelection.isItAffordable(4, 8)).to.equal('Book bought. You have 4$ left');
        expect(bookSelection.isItAffordable(4, 8.2)).to.equal('Book bought. You have 4.199999999999999$ left');
        expect(bookSelection.isItAffordable(4, -8.2)).to.equal('You don\'t have enough money');
        expect(bookSelection.isItAffordable(0, 8)).to.equal('Book bought. You have 8$ left');
        expect(bookSelection.isItAffordable(-2, 8)).to.equal('Book bought. You have 10$ left');
    });
    it('Testing -> suitableTitles', () => {
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Another movie", genre: "Thriller" }], 'Thriller')).to.includes('The Da Vinci Code', 'Another movie');
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Another movie", genre: "Thriller" }], 'Comedy')).to.length(0);
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.length(1);
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.includes('The Da Vinci Code');
        expect(() => { bookSelection.suitableTitles('', '') }).to.throw('Invalid input');
        expect(() => { bookSelection.suitableTitles([], []) }).to.throw('Invalid input');
        expect(() => { bookSelection.suitableTitles('', []) }).to.throw('Invalid input');
        expect(() => { bookSelection.suitableTitles([]) }).to.throw('Invalid input');
    });
});

// expect(() => { }).to.throw();
// expect().to.equal();