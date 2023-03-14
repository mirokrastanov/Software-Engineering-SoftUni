// [] adjust HTML
// [] app.js/router.js/util.js
// [] view placeholders
// [] view implementations
// [] fetch request function --> return await res.json()
// [] catalog
// [] login
// [] register
// [] create
// [] details
// [] like
// [] edit
// [] delete
// [] guest
import { loadHome } from './home.js';

const elements = {
    moviesURL: 'http://localhost:3030/data/movies',
    sections: document.querySelectorAll('.view-section'),
    home: document.querySelector('#home-page'),
    homeMovies: document.querySelector('#home-page #movies-list'),
    movie: document.querySelector('#movie-example'),

};

loadHome();



export {
    elements,

}