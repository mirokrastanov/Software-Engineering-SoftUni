import page from './node_modules/page/page.mjs';
import { catalogPage } from './src/views/catalog.js';
import { createPage } from './src/views/create.js';
import { detailsPage } from './src/views/details.js';
import { editPage } from './src/views/edit.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';
import { myFurniturePage } from './src/views/myFurniture.js';
import { render, html } from './node_modules/lit-html/lit-html.js';

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

function renderMiddlware(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}

