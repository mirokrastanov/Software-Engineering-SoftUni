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
import { loadHome, hideSections } from './home.js';
import { loadMovies } from './util.js';

const elements = {
    sections: document.querySelectorAll('.view-section'),
    home: document.querySelector('#home-page'),
    homeMovies: document.querySelector('#home-page #movies-list'),

};

loadHome();
loadMovies();



export {
    elements,

}