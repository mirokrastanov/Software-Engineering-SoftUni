import { elements } from './app.js';
import { loadHome } from './home.js';

async function request(url, options) {
    try {
        let res = await fetch(url, options);
        let data = await res.json();
        if (!res.ok) {
            return null;
        }
        return data;
    } catch (error) {
        return null;
    }
}

function onNavigationClick(e) {
    e.preventDefault();
    if (e.target.tagName == 'A' && e.target.textContent == 'Movies') {
        loadHome();
    } else {
        if (e.target.textContent == 'Logout') {
            console.log('logout');
        } else if (e.target.textContent == 'Login') {
            console.log('login');
        } else if (e.target.textContent == 'Register') {
            console.log('register');
        }
    }
}

export {
    request,
    onNavigationClick,

}