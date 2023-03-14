import { elements } from './app.js';

async function loadMovies() {
    let url = 'http://localhost:3030/data/movies';
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    elements.homeMovies.replaceChildren();
    let movies = await request(url, options);
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

async function request(url, options) {
    try {
        let res = await fetch(url, options);
        let data = await res.json();
        if (!res.ok) {
            return null;
        }
        return data;
    } catch (error) {
        return null;
    }
}

export {
    loadMovies,
    request,

}