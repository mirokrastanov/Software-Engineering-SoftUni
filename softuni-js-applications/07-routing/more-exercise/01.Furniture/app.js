import page from './node_modules/page/page.mjs';
import { catalogPage } from './src/views/catalog.js';
import { createPage } from './src/views/create.js';
import { detailsPage } from './src/views/details.js';
import { editPage } from './src/views/edit.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';
import { myFurniturePage } from './src/views/myFurniture.js';
import { render, html } from './node_modules/lit-html/lit-html.js';
import { logout } from './src/api/auth.js';

const root = document.querySelector('.container');

page('/', renderMiddlware, catalogPage);
page('/index.html', renderMiddlware, catalogPage);
page('/catalog', renderMiddlware, catalogPage);
page('/create', renderMiddlware, createPage);
page('/details/:id', renderMiddlware, detailsPage);
page('/edit/:id', renderMiddlware, editPage);
page('/login', renderMiddlware, loginPage);
page('/register', renderMiddlware, registerPage);
page('/my-furniture', renderMiddlware, myFurniturePage);
page('*', catalogPage);
page.start();
updateNav();

function updateNav() {
    const userSection = document.querySelector('#user');
    const guestSection = document.querySelector('#guest');
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        userSection.style.display = 'inline-block';
        guestSection.style.display = 'none';
    } else {
        userSection.style.display = 'none';
        guestSection.style.display = 'inline-block';
    }
}

function renderMiddlware(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    next();
}

document.querySelector('#logoutBtn').addEventListener('click', async (e) => {
    await logout();
    updateNav();
    page.redirect('/');
});