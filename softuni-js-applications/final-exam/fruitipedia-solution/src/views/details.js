import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItem, getItemDetails } from '../api/auth.js';

let contextSpecific = null;
export async function detailsPage(ctxAPP) {
    contextSpecific = ctxAPP;
    let item = await getItemDetails(ctxAPP.params.id);
    let userData = JSON.parse(localStorage.getItem('userData'));
    ctxAPP.render(detailsLoadout(item, userData));
}

async function onEdit(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    contextSpecific.page.redirect(`/edit/${id}`);
}

async function onDelete(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    let check = confirm('Are you sure you want to DELETE this Item?');
    if (check) {
        await deleteItem(id);
        contextSpecific.page.redirect(`/dashboard`);
    }
}

function isOwner(item, userData) {
    if (userData) {
        return item._ownerId == userData._id;
    } else {
        return false;
    }
}

function isLogged(userData) {
    return userData ? true : false;
}

const detailsLoadout = (item, userData) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="../..${item.imageUrl}" alt="example1" />
            <p id="details-title">${item.name}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p>${item.description}</p>
                    <p id="nutrition">Nutrition</p>
                    <p id="details-nutrition">${item.nutrition}</p>
                </div>
                <!-- Edit/Delete - only for creator -->
                ${isLogged(userData) && isOwner(item, userData)
                ? renderBtnsSpecific(item._id)
                : null
                }
            </div>
        </div>
    </section>`;

const renderBtnsSpecific = (id) => html`
    <div id="action-buttons">
        <a data-id=${id} @click=${onEdit} id="edit-btn">Edit</a>
        <a data-id=${id} @click=${onDelete} id="delete-btn">Delete</a>
    </div>`;
