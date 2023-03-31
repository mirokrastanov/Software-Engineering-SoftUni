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
import { myDashboardPage } from './src/views/myDashboard.js';

const root = document.querySelector('#site-content');

// views ==> 
// BONUS ==> 

page('/', passThrough, homePage);
page('/index.html', passThrough, homePage);
page('/dashboard', passThrough, dashboardPage);
page('/my-dashboard', passThrough, myDashboardPage);
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
    const userSection = document.querySelector('#profile');
    const guestSection = document.querySelector('#guest');
    const welcomeUsername = document.querySelector('#profile a:nth-of-type(1)');
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    if (userData) {
        userSection.style.display = 'block'; // inline-block if needed
        guestSection.style.display = 'none';
        welcomeUsername.textContent = `Welcome ${userData.username}`;
    } else {
        userSection.style.display = 'none';
        guestSection.style.display = 'block';
        welcomeUsername.textContent = `Welcome username`;
    }
}

function passThrough(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    next();
}

document.querySelector('#profile a:nth-of-type(4)') // logout ==> javascript:void(0)
    .addEventListener('click', async (e) => {
        await logout();
        updateNav();
        page.redirect('/');
    });
