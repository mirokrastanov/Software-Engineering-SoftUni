import page from './node_modules/page/page.mjs';
import { render, html } from './node_modules/lit-html/lit-html.js';
import { logout } from './src/api/auth.js';
import { welcomePage } from './src/views/home.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';

const root = document.querySelector('main');

page('/', middleMan, welcomePage);
// page('/index.html', middleMan, welcomePage);
// page('/catalog', middleMan, welcomePage);
// page('/create', middleMan, createPage);
// page('/details/:id', middleMan, detailsPage);
// page('/edit/:id', middleMan, editPage);
page('/login', middleMan, loginPage);
page('/register', middleMan, registerPage);
// page('/my-furniture', middleMan, myFurniturePage);
page('*', welcomePage);
page.start();
updateNav();

function updateNav() {
    const userSection = document.querySelector('.user');
    const guestSection = document.querySelector('.guest');
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    if (userData) {
        userSection.style.display = 'inline-block';
        guestSection.style.display = 'none';
    } else {
        userSection.style.display = 'none';
        guestSection.style.display = 'inline-block';
    }
}

function middleMan(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    next();
}

document.querySelector('nav .user .profile a:nth-of-type(2)').addEventListener('click', async (e) => {
    await logout();
    updateNav();
    page.redirect('/');
});