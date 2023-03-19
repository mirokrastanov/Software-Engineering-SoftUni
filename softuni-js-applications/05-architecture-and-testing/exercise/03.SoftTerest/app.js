// MVC Model
// app.js - controller
// views - login, register, dashboard/catalog, home
// router - paths for all views (add hrefs for /login, etc)
// api - methods, async functions
import { logout } from "./src/api/user.js";
import { initializer } from "./src/router.js";
import { showCatalog } from "./src/views/catalog.js";
import { showCreate } from "./src/views/create.js";
import { showDetails } from "./src/views/details.js";
import { showHomeView } from "./src/views/home.js";
import { showLogin } from './src/views/login.js';
import { showRegister } from "./src/views/register.js";

document.querySelector("#defSection").remove();

async function logoutFunc() {
    await logout();
    router.goTo('/');
    router.updateNav();
}

const links = {
    '/': showHomeView,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/create': showCreate,
    '/details': showDetails,
    '/logout': logoutFunc,
};

const router = initializer(links);
router.updateNav();
router.goTo('/');