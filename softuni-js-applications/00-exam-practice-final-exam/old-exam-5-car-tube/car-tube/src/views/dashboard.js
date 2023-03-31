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
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
        ${items.length != 0
        ? Object.values(items).map(x => itemTemplate(x))
        : noItemsTemplate()}     
        </div>
    </section>`;


//=> FILL SINGLE ITEM Template
//=> ADD   .value=${item.ATRname} respectively on EACH FIELD
//=> ADD to the BUTTON   data-id=${item._id} @click=${onDetails}
const itemTemplate = (item) => html`
    <div class="listing">
        <div class="preview">
            <img src="../..${item.imageUrl}">
        </div>
        <h2>${item.brand} ${item.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${item.year}</h3>
                <h3>Price: ${item.price} $</h3>
            </div>
            <div class="data-buttons">
                <a data-id=${item._id} @click=${onDetails} class="button-carDetails">Details</a>
            </div>
        </div>
    </div>`;

//=> FILL for when no items are present 
const noItemsTemplate = () => html`
<p class="no-cars">No cars in database.</p>`;
