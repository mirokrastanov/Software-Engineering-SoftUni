//=> IF there is a page MY DASHBOARD, MY ITEMS, MY CARDS, whatever - copy this and adjust accordingly
import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems } from '../api/auth.js';

let context = null;
export async function dashboardPage(ctx) {
    context = ctx;
    let itemsArray = await getAllItems();
    if (!itemsArray) itemsArray = [];
    // let itemsArray = [];
    ctx.render(itemsTemplate(itemsArray));
}

async function onDetails(e) {
    e.preventDefault();
    let item = e.currentTarget;
    let id = item.dataset.id;
    context.page.redirect(`/details/${id}`);
}

//=> FILL ALL ITEMS Template
//=> USE & ADJUST for Template
// ${ items.length != 0 
//     ? html`<ul class="card-wrapper">
//     ${Object.values(items).map(x => itemTemplate(x))}
//     </ul>`
//     : null
//     }
// <!-- Display an h2 if there are no posts -->
//     ${ items.length == 0 
//     ? noitemsTemplate()
//     : null
//     }
const itemsTemplate = (items) => html`
    <section id="dashboard">
        <h2 class="dashboard-title">Services for every animal</h2>
        <div class="animals-dashboard">
        ${items.length != 0
        ? Object.values(items).map(x => itemTemplate(x))
        : noItemsTemplate()
        }
        </div>
    </section>`;


//=> FILL SINGLE ITEM Template
//=> ADD   .value=${item.ATRname} respectively on EACH FIELD
//=> ADD to the BUTTON   data-id=${item._id} @click=${onDetails}
const itemTemplate = (item) => html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src="../${item.image}">
        </article>
        <h2 class="name">${item.name}</h2>
        <h3 class="breed">${item.breed}</h3>
        <div class="action">
            <a class="btn" data-id=${item._id} @click=${onDetails}>Details</a>
        </div>
    </div>`;

//=> FILL for when no items are present 
const noItemsTemplate = () => html`
    <div>
        <p class="no-pets">No pets in dashboard</p>
    </div>`;
