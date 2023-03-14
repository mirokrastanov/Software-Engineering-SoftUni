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
import {
    onAddMovieClick, onDetailsClick, onNavigationClick,
} from './util.js';

const elements = {
    moviesURL: 'http://localhost:3030/data/movies',
    usersURL: 'http://localhost:3030/users',
    navigation: document.querySelector('nav.navbar.navbar-expand-lg.navbar-dark.bg-dark'),
    sections: document.querySelectorAll('.view-section'),
    home: document.querySelector('#home-page'),
    homeMovies: document.querySelector('#home-page #movies-list'),
    movie: document.querySelector('#movie-example'),
    addMovieBtn: document.querySelector('#add-movie-button a'),
    login: document.querySelector('#form-login'),
    register: document.querySelector('#form-sign-up'),

};

let test = localStorage.getItem('userData');
console.log(JSON.parse(test));

loadHome();
elements.navigation.addEventListener('click', (e) => {
    onNavigationClick(e);
});
elements.homeMovies.addEventListener('click', (e) => {
    onDetailsClick(e);
});
elements.addMovieBtn.addEventListener('click', (e) => {
    onAddMovieClick(e);
});


export {
    elements,

}