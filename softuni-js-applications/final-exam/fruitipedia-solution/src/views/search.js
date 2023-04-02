import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchFor } from '../api/auth.js';

let contextSpecific = null;
export async function searchPage(ctxAPP) {
    contextSpecific = ctxAPP;
    ctxAPP.render(preSearchLoadout());
}

async function onSearch(e) {
    e.preventDefault();
    let input = document.getElementById('search-input'); 
    try {
        if (input.value.trim() == '') {
            throw new Error('Input cannot be empty!');
        }
        let itemsArray = await searchFor(input.value);
        if (!itemsArray) itemsArray = [];
        // let itemsArray = [];
        contextSpecific.render(postSearchLoadout(itemsArray));
    } catch (error) {
        alert(error.message);
    }
}

async function onDetails(e) {
    e.preventDefault();
    let item = e.currentTarget;
    let id = item.dataset.id;
    contextSpecific.page.redirect(`/details/${id}`);
}

const preSearchLoadout = () => html`
    <section id="search">
    <div class="form">
        <h2>Search</h2>
        <form class="search-form">
            <input type="text" name="search" id="search-input" />
            <button @click=${onSearch} class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    </section>`;

const postSearchLoadout = (items) => html`
    <section id="search">
    <div class="form">
        <h2>Search</h2>
        <form class="search-form">
            <input type="text" name="search" id="search-input" />
            <button @click=${onSearch} class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
        ${items.length != 0
        ? Object.values(items).map(x => foundItemLoadout(x))
        : noItemsLoadout()}  
    </div>
    </section>`;

const foundItemLoadout = (item) => html`
    <div class="fruit">
        <img src="../..${item.imageUrl}" alt="example1" />
        <h3 class="title">${item.name}</h3>
        <p class="description">${item.description}</p>
        <a class="details-btn" data-id=${item._id} @click=${onDetails}>More Info</a>
    </div>`;

const noItemsLoadout = () => html`
<p class="no-result">No result.</p>`;
