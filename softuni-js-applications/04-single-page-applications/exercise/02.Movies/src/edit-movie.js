import { elements } from "./app.js";
import { hideSections, loadHome } from "./home.js";
import { loadMovieSection } from "./movie.js";
import { request } from "./util.js";

async function loadEditMovie(movie) {
    let url = elements.moviesURL + '/' + movie.id;
    let movieData = await request(url);
    hideSections();
    elements.editMovie.style.display = 'block';
    elements.editMovie.replaceChildren(createEditForm());
    let newForm = elements.editMovie.querySelector('form');
    newForm.querySelector('#title').value = movieData.title;
    newForm.querySelector('textarea.form-control').value = movieData.description;
    newForm.querySelector('#imageUrl').value = movieData.img;
    newForm.addEventListener('submit', (e) => {
        onEditFormClick(e, newForm, movie);
    });
}

function createEditForm() {
    let form = document.createElement('form');
    form.classList.add('text-center', 'border', 'border-light', 'p-5');
    form.setAttribute('action', '');
    form.setAttribute('method', '');
    form.innerHTML = `
    <h1>Edit Movie</h1>
    <div class="form-group">
        <label for="title">Movie Title</label>
        <input id="title" type="text" class="form-control" placeholder="Movie Title" value="" name="title" />
    </div>
    <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Movie Description..." name="description"></textarea>
    </div>
    <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" value="" name="img" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>`;
    return form;
}

async function onEditFormClick(e, form, movie) {
    e.preventDefault();
    let formData = new FormData(form);
    let inputs = Object.fromEntries(formData.entries());
    // console.log(inputs);
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
        // console.log(url);
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken,
            },
            body: JSON.stringify(inputs),
        };
        let data = await request(url, options);
        if (typeof await data != 'object') {
            let error = { message: data };
            throw error;
        }
        // console.log(data);
        form.reset();
        hideSections();
        loadMovieSection(data._id);
    } catch (error) {
        console.log(error.message);
    }
}


async function deleteMovie(id) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    let url = elements.moviesURL + '/' + id;
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.accessToken,
        },
    };
    let res = await request(url, options);
    if (!res.ok) {
        loadHome();
    } else {
        console.log('Deletion Error: ' + res.json());
    }
}


export {
    loadEditMovie,
    deleteMovie,

}