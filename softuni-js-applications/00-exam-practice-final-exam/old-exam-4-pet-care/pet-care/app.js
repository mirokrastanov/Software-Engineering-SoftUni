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

const root = document.querySelector('#content');

// views ==> 
// BONUS ==> 

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
    const userSection = document.querySelectorAll('.user');
    const guestSection = document.querySelectorAll('.guest');
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    if (userData) {
        Array.from(userSection).map(x => x.style.display = 'block'); // inline-block if needed
        Array.from(guestSection).map(x => x.style.display = 'none');
    } else {
        Array.from(userSection).map(x => x.style.display = 'none');
        Array.from(guestSection).map(x => x.style.display = 'block');
    }
}

function passThrough(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    next();
}

document.querySelector('header nav ul li:nth-of-type(6) a') // logout ==> javascript:void(0)
    .addEventListener('click', async (e) => {
        await logout();
        updateNav();
        page.redirect('/');
    });
