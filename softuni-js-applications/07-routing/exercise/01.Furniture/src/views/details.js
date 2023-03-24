import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/api.js';
import { deleteById, getItemById } from '../api/auth.js';

let context = null;
export async function detailsPage(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const item = await getItemById(id);
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) return ctx.render(detailsTemplate(item, false, delItem));
    ctx.render(detailsTemplate(item, userData._id == item._ownerId, delItem));
}

async function delItem(e) {
    e.preventDefault();
    let id = e.target.dataset.id;
    await deleteById(id);
    context.page.redirect('/');
}

function detailsTemplate(item, isOwner, handler) {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="/${item.img}" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${item.make}</span></p>
            <p>Model: <span>${item.model}</span></p>
            <p>Year: <span>${item.year}</span></p>
            <p>Description: <span>${item.description}</span></p>
            <p>Price: <span>$${item.price}</span></p>
            <p>Material: <span>${item.material}</span></p>
            ${isOwner ? html`
            <div>
                <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
                <a @click=${handler} data-id=${item._id} href="javascript:void(0)" class="btn btn-red">Delete</a>
            </div>` : null }
        </div >
    </div > `;
}

