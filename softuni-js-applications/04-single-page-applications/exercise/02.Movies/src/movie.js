import { elements } from "./app.js";
import { isLogged, request } from "./util.js";

async function loadMovieSection(id) {
    let url = `${elements.moviesURL}/${id}`;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let movie = await request(url, options);
    elements.movie.style.display = 'block';
    let movieElement = createMovieExample(movie);
    elements.movie.replaceChildren(movieElement);
    await updateMovieBtns();
    let btnsCtr = elements.movie.querySelector('.container .row.bg-light.text-dark .col-md-4.text-center');
    let btns = {
        delete: btnsCtr.querySelector('a.btn.btn-danger'),
        edit: btnsCtr.querySelector('a.btn.btn-warning'),
        like: btnsCtr.querySelector('a.btn.btn-primary'),
        indicator: btnsCtr.querySelector('span.enrolled-span'),
    };
    btnsCtr.addEventListener('click', (e) => {
        btnsHandler(e);
    });
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

async function updateMovieBtns() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    let btnsCtr = elements.movie.querySelector('.container .row.bg-light.text-dark .col-md-4.text-center');
    let movieData = {
        html: elements.movie.querySelector('.container'),
        ownerId: elements.movie.querySelector('.container').dataset.ownerId,
        id: elements.movie.querySelector('.container').dataset.id,
    };
    console.log(userData, movieData);
    let btns = {
        delete: btnsCtr.querySelector('a.btn.btn-danger'),
        edit: btnsCtr.querySelector('a.btn.btn-warning'),
        like: btnsCtr.querySelector('a.btn.btn-primary'),
        indicator: btnsCtr.querySelector('span.enrolled-span'),
    };
    let movieLikes = await getLikes(movieData.id);
    btns.indicator.textContent = `Liked ${movieLikes}`;
    // and use it below for the 2 conditions - logged in / not
    btns.indicator.style.display = 'inline-block';
    if (!isLogged()) {  // NOT logged in
        btns.delete.style.display = 'none';
        btns.edit.style.display = 'none';
        btns.like.style.display = 'none';
        // update indicator's textContent with # likes
    } else {  // logged in
        if (movieData.ownerId == userData._id) { // Owner: edit/delete
            btns.like.style.display = 'none';
            btns.delete.style.display = 'inline-block';
            btns.edit.style.display = 'inline-block';
        } else { // NOT Owner: like
            btns.delete.style.display = 'none';
            btns.edit.style.display = 'none';
            if (hasCurrentUserLikedThisMovie(userData._id, movieData.id)) {
                btns.like.style.display = 'none'; // hide like btn
            } else {
                btns.like.style.display = 'inline-block'; // show it
            }
        }
    }

}

function btnsHandler(e) {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        if (e.target.textContent == 'Delete') {
            // function for movie deletion
        } else if (e.target.textContent == 'Edit') {
            // function for movie edit - from the edit-movie.js
        } else if (e.target.textContent == 'Like') {
            // function for liking + check for just 1 like
            // after a successful like - updateMovieBtns();
        }
    }
}

async function getLikes(movieId) {
    let url = elements.baseURL + `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        let res = await request(url, options);
        console.log(await res);
    } catch (error) {
        console.log(error.message);
    }
    return 3;
}

async function hasCurrentUserLikedThisMovie(userId, movieId) {
    

    
}


export {
    loadMovieSection,

}