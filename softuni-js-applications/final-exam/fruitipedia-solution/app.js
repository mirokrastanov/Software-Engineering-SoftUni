import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js';
import { logout } from './src/api/auth.js';
import { homePage } from './src/views/home.js';
import { dashboardPage } from './src/views/dashboard.js';
import { loginPage } from './src/views/login.js';
import { registrationPage } from './src/views/register.js';
import { creationPage } from './src/views/create.js';
import { detailsPage } from './src/views/details.js';
import { editPage } from './src/views/edit.js';
import { searchPage } from './src/views/search.js';

const attachParentEl = document.querySelector('body main');

page('/', passThrough, homePage);
page('/index.html', passThrough, homePage);
page('/dashboard', passThrough, dashboardPage);
page('/login', passThrough, loginPage);
page('/register', passThrough, registrationPage);
page('/create', passThrough, creationPage);
page('/details/:id', passThrough, detailsPage);
page('/edit/:id', passThrough, editPage);
page('/search', passThrough, searchPage);
page('*', homePage);
page.start();
updateNav();

function updateNav() {
    const userSec = document.querySelector('.user');
    const guestSec = document.querySelector('.guest');
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    if (userData) {
        userSec.style.display = 'block'; 
        guestSec.style.display = 'none';
    } else {
        userSec.style.display = 'none';
        guestSec.style.display = 'block';
    }
}

function passThrough(ctxAPP, next) {
    ctxAPP.render = (contentActual) => render(contentActual, attachParentEl);
    ctxAPP.updateNav = updateNav;
    next();
}

document.querySelector('#wrapper header nav .user a:nth-of-type(2)') 
    .addEventListener('click', async (e) => {
        await logout();
        updateNav();
        page.redirect('/');
    });
