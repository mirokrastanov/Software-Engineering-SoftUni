import { elements } from "./app.js";
import { request } from "./util.js";

async function loadMovieSection(id) {
    let url = `${elements.moviesURL}/${id}`;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let movie = await request(url, options);
    console.log(movie);
    elements.movie.style.display = 'block';
    let movieElement = createMovieExample(movie);
    elements.movie.replaceChildren(movieElement);
}

function createMovieExample(movie) {  // TODO - add likes counter
    let div = document.createElement('div');
    div.classList.add('container');
    div.dataset.ownerId = movie._ownerId;
    div.dataset.id = movie._id;
    div.innerHTML = `
    <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>
        <div class="col-md-8">
            <img class="img-thumbnail" src="${movie.img}" alt="Movie" />
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p>${movie.description}</p>
            <a class="btn btn-danger" href="javascript:void(0)">Delete</a>
            <a class="btn btn-warning" href="javascript:void(0)">Edit</a>
            <a class="btn btn-primary" href="javascript:void(0)">Like</a>
            <span class="enrolled-span">Liked ###</span>
        </div>
    </div>`;
    return div;
}


export {
    loadMovieSection,

}