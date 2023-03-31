import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchFor } from '../api/auth.js';

let context = null;
export async function searchPage(ctx) {
    context = ctx;
    ctx.render(preSearchTemplate());
}

async function onSearch(e) {
    e.preventDefault();
    let input = document.getElementById('search-input'); // ADJUST selector to grab value
    try {
        // validation below
        if (input.value.trim() == '') {
            throw new Error('Input cannot be empty!');
        }
        let itemsArray = await searchFor(input.value);
        if (!itemsArray) itemsArray = [];
        // let itemsArray = [];
        context.render(postSearchTemplate(itemsArray));
    } catch (error) {
        alert(error.message);
    }
}

async function onDetails(e) {
    e.preventDefault();
    let item = e.currentTarget;
    let id = item.dataset.id;
    context.page.redirect(`/details/${id}`);
}

// FILL PRE Template
//=> on the button     @click=${onSearch}
const preSearchTemplate = () => html`
    <section id="search-cars">
        <h1>Filter by year</h1>
        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button @click=${onSearch} class="button-list">Search</button>
        </div>
    </section>`;


// FILL POST Template
//=> USE & ADJUST for Template BELOW
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
// or together if they are in the same parent element
//=> on the search button     @click=${onSearch}
const postSearchTemplate = (items) => html`
    <section id="search-cars">
        <h1>Filter by year</h1>
        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button @click=${onSearch} class="button-list">Search</button>
        </div>
        <h2>Results:</h2>
        <div class="listings">
        ${items.length != 0
        ? Object.values(items).map(x => itemTemplate(x))
        : noItemsTemplate()}  
        </div>
    </section>`;

//=> FILL SINGLE ITEM Template
//=> ADD  ${item.ATRname} respectively on EACH FIELD
//=> ADD to BUTTON   data-id=${item._id} @click=${onDetails}
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
<p class="no-cars"> No results.</p>`;
