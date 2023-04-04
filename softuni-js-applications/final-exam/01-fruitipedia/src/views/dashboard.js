import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems } from '../api/auth.js';

let contextSpecific = null;
export async function dashboardPage(ctxAPP) {
    contextSpecific = ctxAPP;
    let itemsArray = await getAllItems();
    if (!itemsArray) itemsArray = [];
    // let itemsArray = [];
    ctxAPP.render(itemsLoadout(itemsArray));
}

async function onDetails(e) {
    e.preventDefault();
    let item = e.currentTarget;
    let id = item.dataset.id;
    contextSpecific.page.redirect(`/details/${id}`);
}

const itemsLoadout = (items) => html`
<h2>Fruits</h2>
        <!-- cards -->
        ${items.length != 0
        ? html`<section id="dashboard">
        ${Object.values(items).map(x => itemSingleLoadout(x))}
        </section>`
        : null}
        <!-- no cards -->
        ${items.length == 0
        ? noItemsLoadout()
        : null}`;

const itemSingleLoadout = (item) => html`
    <div class="fruit">
        <img src="../..${item.imageUrl}" alt="example1" />
        <h3 class="title">${item.name}</h3>
        <p class="description">${item.description}</p>
        <a class="details-btn" data-id=${item._id} @click=${onDetails}>More Info</a>
    </div>`;

const noItemsLoadout = () => html`
<h2>No fruit info yet.</h2>`;
