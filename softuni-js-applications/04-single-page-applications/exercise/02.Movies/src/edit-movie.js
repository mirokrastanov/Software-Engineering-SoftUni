import { elements } from "./app.js";
import { hideSections } from "./home.js";
import { loadMovieSection } from "./movie.js";
import { request } from "./util.js";

async function loadEditMovie(movie) {
    let url = elements.moviesURL + '/' + movie.id;
    let movieData = await request(url);
    hideSections();
    elements.editMovie.style.display = 'block';
    let newForm = elements.editMovie.querySelector('form');
    newForm.querySelector('#title').value = movieData.title;
    newForm.querySelector('textarea.form-control').value = movieData.description;
    newForm.querySelector('#imageUrl').value = movieData.img;
    newForm.addEventListener('submit', (e) => {
        onEditFormClick(e, newForm, movie);
    });
}

async function onEditFormClick(e, form, movie) {
    e.preventDefault();
    let formData = new FormData(form);
    let inputs = Object.fromEntries(formData.entries());
    let userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    // console.log(inputs);
    try {
        Object.values(inputs).forEach(x => {
            if (x.trim() == '') {
                throw new Error('All fields are required!');
            }
        });
        let url = elements.moviesURL + '/' + movie.id;
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken,
            },
            body: JSON.stringify(inputs),
        };
        let data = await request(url, options);
        if (typeof data != 'object') {
            let error = { message: data };
            throw error;
        }
        // console.log(data);
        form.reset();
        hideSections();
        loadMovieSection(movie.id);
    } catch (error) {
        console.log(error.message);
    }
}



export {
    loadEditMovie,

}