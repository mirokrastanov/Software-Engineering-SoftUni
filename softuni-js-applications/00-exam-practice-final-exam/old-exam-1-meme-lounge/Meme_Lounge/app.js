import page from './node_modules/page/page.mjs';
import { render, html } from './node_modules/lit-html/lit-html.js';
import { logout } from './src/api/auth.js';
import { welcomePage } from './src/views/home.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';
import { allMemesPage } from './src/views/allMemes.js';
import { memeDetailsPage } from './src/views/memeDetails.js';
import { editMemePage } from './src/views/editMeme.js';
import { createMemePage } from './src/views/createMeme.js';
import { myMemesPage } from './src/views/userProfile.js';

const root = document.querySelector('main');

page('/', middleMan, welcomePage);
page('/index.html', middleMan, welcomePage);
page('/allMemes', middleMan, allMemesPage);
// page('/create', middleMan, createMemePage);
// page('/data/memes/:id', middleMan, memeDetailsPage);
// page('/edit/:id', middleMan, editMemePage);
// page('/login', middleMan, loginPage);
// page('/register', middleMan, registerPage);
// page('/userProfile', middleMan, myMemesPage);
// page('*', welcomePage);
// page.start();
// updateNav();

function updateNav() {
    const userSection = document.querySelector('.user');
    const guestSection = document.querySelector('.guest');
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userEmailElement = document.querySelector('nav .user .profile span');
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

document.querySelector('nav .user .profile a:nth-of-type(2)').addEventListener('click', async (e) => {
    await logout();
    updateNav();
    page.redirect('/');
});
