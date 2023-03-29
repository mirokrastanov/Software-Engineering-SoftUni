// Meme Details Page ( for Guests and Users )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getMemeDetailsById } from '../api/auth.js';

let context = null;
export async function memeDetailsPage(ctx) {
    context = ctx;
    let meme = await getMemeDetailsById(ctx.params.id);
    ctx.render(memeDetailsTemplate(meme));
}

async function onEdit(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    console.log('edit');
    context.page.redirect(`/edit/${id}`);
}

async function onDelete(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    console.log('delete');
    // context.page.redirect(`/data/memes/${id}`);
}


// Details Meme Page (for guests and logged users)
const memeDetailsTemplate = (meme) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="../..${meme.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${ meme._ownerId == JSON.parse(localStorage.getItem('userData'))._id
            // Btns Edit/Delete should be displayed only for creator of this meme  -->
            ? renderBtns(meme._id)
            : null
            }
        </div>
    </div>
</section>`;

const renderBtns = (id) => html`
<a class="button warning" data-id=${id} @click=${onEdit}>Edit</a>
<button class="button danger" data-id=${id} @click=${onDelete}>Delete</button>`;