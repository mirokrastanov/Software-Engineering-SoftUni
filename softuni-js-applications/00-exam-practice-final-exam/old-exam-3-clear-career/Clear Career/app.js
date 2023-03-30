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

const root = document.querySelector('body main');

// views ==> home, login, register, dashboard, create, details, edit, 
// BONUS ==> apply on an offer, similar structure to likes

page('/', passThrough, homePage);
page('/index.html', passThrough, homePage);
page('/dashboard', passThrough, dashboardPage);
page('/login', passThrough, loginPage);
page('/register', passThrough, registrationPage);
page('/create', passThrough, creationPage);
page('/details/:id', passThrough, detailsPage);
page('/edit/:id', passThrough, editPage);
page('*', homePage);
page.start();
updateNav();

function updateNav() {
    const userSection = document.querySelector('.user');
    const guestSection = document.querySelector('.guest');
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    if (userData) {
        userSection.style.display = 'block'; // inline-block if needed
        guestSection.style.display = 'none';
    } else {
        userSection.style.display = 'none';
        guestSection.style.display = 'block';
    }
}

function passThrough(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    next();
}

document.querySelector('#wrapper header nav div:nth-of-type(2) a:nth-of-type(2)')
    .addEventListener('click', async (e) => {
        await logout();
        updateNav();
        page.redirect('/dashboard');
    });
