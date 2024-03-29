import { elements } from './app.js';
import { isLogged, request, updateNav } from './util.js';


function hideSections() {
    [...elements.sections].forEach(x => x.style.display = 'none');
}

function loadHome() {
    hideSections();
    elements.home.style.display = 'block';
    loadMovies();
    updateNav();
    if (isLogged()) {
        elements.addMovieBtn.style.display = 'inline-block';
    } else {
        elements.addMovieBtn.style.display = 'none';
    }
}

async function loadMovies() {
    let url = elements.moviesURL;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    elements.homeMovies.replaceChildren();
    let movies = await request(url, options);
    if (movies == null) return;
    movies.forEach(x => {
        let card = createMovieCard(x);
        elements.homeMovies.appendChild(card);
    });
}

function createMovieCard(movie) {
    let div = document.createElement('li');
    div.classList.add('card');
    div.dataset.ownerId = movie._ownerId;
    div.dataset.id = movie._id;
    div.innerHTML = `
    <div class="card-top">
        <img class="card-img-top" src="${movie.img}" />
        <h4>${movie.title}</h4>
    </div>
    <div class="card-bottom">
        <button>Details</button>
    </div>
    `;
    return div;
}

export {
    hideSections,
    loadHome,

}