import { elements } from './app.js';

function hideSections() {
    [...elements.sections].forEach(x => x.style.display = 'none');
}

function loadHome() {
    hideSections();
    elements.home.style.display = 'block';
}

export {
    hideSections,
    loadHome,

}