import { elements } from './app.js';
import { hideSections, loadHome } from './home.js';
import { loadLogin } from './login.js';
import { loadMovieSection } from './movie.js';
import { loadRegister } from './register.js';


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

function onNavigationClick(e) {
    e.preventDefault();
    if (e.target.tagName == 'A' && e.target.textContent == 'Movies') {
        loadHome();
    } else {
        if (e.target.textContent == 'Logout') {
            console.log('logout');
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



export {
    request,
    onNavigationClick,
    onDetailsClick,
    onAddMovieClick,

}