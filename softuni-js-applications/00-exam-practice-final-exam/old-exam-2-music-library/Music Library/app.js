import page from './node_modules/page/page.mjs';
import { render, html } from './node_modules/lit-html/lit-html.js';
import { logout } from './src/api/auth.js';
import { homePage } from './src/views/home.js';
import { dashboardPage } from './src/views/dashboard.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';
import { addPage } from './src/views/addAlbum.js';
import { detailsPage } from './src/views/details.js';
import { editPage } from './src/views/edit.js';

const root = document.querySelector('body main');

// views ==> home, login, register, logout, dashboard, add album,
//                       album details, edit album, delete album
// BONUS ==> likes for each album 

page('/', middleMan, homePage);
page('/index.html', middleMan, homePage);
page('/dashboard', middleMan, dashboardPage);
page('/login', middleMan, loginPage);
page('/register', middleMan, registerPage);
page('/add-album', middleMan, addPage);
page('/details/:id', middleMan, detailsPage);
page('/edit/:id', middleMan, editPage);
page('*', homePage);
page.start();
updateNav();

function updateNav() {
    const userSection = document.querySelector('.user');
    const guestSection = document.querySelector('.guest');
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    if (userData) {
        userSection.style.display = 'block';
        guestSection.style.display = 'none';
    } else {
        userSection.style.display = 'none';
        guestSection.style.display = 'block';
    }
}

function middleMan(ctx, next) {
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
