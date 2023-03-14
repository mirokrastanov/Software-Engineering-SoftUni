import { elements } from './app.js';
import { hideSections, loadHome } from './home.js';
import { loadLogin } from './login.js';
import { loadMovieSection } from './movie.js';
import { loadRegister } from './register.js';


async function request(url, options) {
    try {
        let res = await fetch(url, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        let data = await res.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

function onNavigationClick(e) {
    e.preventDefault();
    if (e.target.tagName == 'A' && e.target.textContent == 'Movies') {
        loadHome();
    } else {
        if (e.target.textContent == 'Logout') {
            onLogout();
        } else if (e.target.textContent == 'Login') {
            loadLogin();
        } else if (e.target.textContent == 'Register') {
            loadRegister();
        }
    }
}

function onDetailsClick(e) {
    e.preventDefault();
    if (e.target.tagName == 'BUTTON') {
        let cardParent = e.target.parentElement.parentElement;
        let id = cardParent.dataset.id;
        hideSections();
        loadMovieSection(id);
    }
}

function onAddMovieClick(e) {
    e.preventDefault();



}

function onLogout() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData == null) {
        loadHome();
        return;
    }
    let url = elements.usersURL + '/logout';
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.accessToken,
        },
    };
    let res = request(url, options);
    localStorage.clear();
    loadHome();
}

function updateNav() {
    
}


export {
    request,
    onNavigationClick,
    onDetailsClick,
    onAddMovieClick,

}