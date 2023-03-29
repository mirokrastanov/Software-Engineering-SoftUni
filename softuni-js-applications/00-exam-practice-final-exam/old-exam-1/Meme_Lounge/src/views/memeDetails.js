// Meme Details Page ( for Guests and Users )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { deleteMemeById, getMemeDetailsById } from '../api/auth.js';

let context = null;
export async function memeDetailsPage(ctx) {
    context = ctx;
    let meme = await getMemeDetailsById(ctx.params.id);
    let userData = JSON.parse(localStorage.getItem('userData'));
    ctx.render(memeDetailsTemplate(meme, userData));
}

async function onEdit(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    context.page.redirect(`/edit/${id}`);
}

async function onDelete(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    await deleteMemeById(id);
    context.page.redirect(`/allMemes`);
}

function isOwner(meme, userData) {
    if (userData) {
        return meme._ownerId == userData._id;
    } else {
        return false;
    }
}

// Details Meme Page (for guests and logged users)
const memeDetailsTemplate = (meme, userData) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="../..${meme.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${isOwner(meme, userData)
                // Btns are displayed only for creator of this meme
                ? renderBtns(meme._id)
                : null
            }
        </div>
    </div>
</section>`;

const renderBtns = (id) => html`
<a class="button warning" data-id=${id} @click=${onEdit}>Edit</a>
<button class="button danger" data-id=${id} @click=${onDelete}>Delete</button>`;