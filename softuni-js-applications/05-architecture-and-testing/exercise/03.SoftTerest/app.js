// MVC Model
// app.js - controller
// views - login, register, dashboard/catalog, home
// router - paths for all views (add hrefs for /login, etc)
// api - methods, async functions
import { showCatalog } from "./src/views/catalog.js";
import { showCreate } from "./src/views/create.js";
import { showDetails } from "./src/views/details.js";
import { showHomeView } from "./src/views/home.js";
import { showLogin } from './src/views/login.js';
import { showRegister } from "./src/views/register.js";

document.querySelector("#defSection").remove();
document.querySelector('nav').addEventListener('click', onNavigate);

const links = {
    '/': showHomeView,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/create': showCreate,
    '/details': showDetails,
    // TODO logout
};
const main = document.querySelector('#mainView');

const context = {
    showSection,

};

function showSection(section) {
    main.replaceChildren(section);
}

function onNavigate(e) {
    e.preventDefault();
    let target = e.target;
    if (target.tagName == 'IMG') {
        target = target.parentElement;
    }
    if (target.tagName == 'A') {
        let url = new URL(target.href);
        goTo(url.pathname);
    }
}

function goTo(name, ...params) {
    const handler = links[name];
    if (typeof(handler) == 'function') {
        handler(context, ...params);
    }

    function updateNav() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            document.querySelectorAll('.user').forEach(x => x.style.display = 'block');
            document.querySelectorAll('.guest').forEach(x => x.style.display = 'none');
        } else {
            document.querySelectorAll('.user').forEach(x => x.style.display = 'none');
            document.querySelectorAll('.guest').forEach(x => x.style.display = 'block');
        }
    }
}
