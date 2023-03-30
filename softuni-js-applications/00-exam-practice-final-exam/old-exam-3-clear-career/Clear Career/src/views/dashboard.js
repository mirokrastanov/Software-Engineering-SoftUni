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
//     ${Object.values(items).map(x => albumTemplate(x))}
//     </ul>`
//     : null
//     }
// <!-- Display an h2 if there are no posts -->
//     ${ items.length == 0 
//     ? noAlbumsTemplate()
//     : null
//     }
const itemsTemplate = (items) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
       ${ items.length != 0 
    ? Object.values(items).map(x => itemTemplate(x)) 
    : noItemsTemplate() }
</section>
`;


//=> FILL SINGLE ITEM Template
//=> ADD   .value=${item.ATRname} respectively on EACH FIELD
//=> ADD to the BUTTON   data-id=${album._id} @click=${onDetails}
const itemTemplate = (item) => html`
    <div class="offer">
        <img src="../${item.imageUrl}" alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${item.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${item.salary}</span></p>
        <a class="details-btn" data-id=${item._id} @click=${onDetails}>Details</a>
    </div>`;

//=> FILL for when no items are present 
const noItemsTemplate = () => html`
<h2>No offers yet.</h2>`;
