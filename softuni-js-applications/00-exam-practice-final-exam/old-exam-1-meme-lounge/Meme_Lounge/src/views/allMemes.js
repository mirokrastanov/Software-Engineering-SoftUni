// All Memes Page ( for Guests and Users )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllMemes } from '../api/auth.js';

let context = null;
export async function allMemesPage(ctx) {
    context = ctx;
    let allMemesArray = await getAllMemes();
    if (!allMemesArray) allMemesArray = [];
    // let allMemesArray = [];
    ctx.render(allMemesTemplate(allMemesArray));
}

async function onDetails(e) {
    e.preventDefault();
    let meme = e.currentTarget;
    let id = meme.dataset.id;
    context.page.redirect(`/data/memes/${id}`);
}

const allMemesTemplate = (memes) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${ memes.length != 0 
            // Display cards below : All memes in database ( If any )
            ? Object.values(memes).map(x => memeCardTemplate(x))
            // Display no-card-message: If there are no memes in database
            : noMemesTemplate()
        }
    </div>
</section>`;

const memeCardTemplate = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src=".${meme.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" data-id=${meme._id} @click=${onDetails}>Details</a>
        </div>
    </div>
</div>`;

const noMemesTemplate = () => html`
<p class="no-memes">No memes in database.</p>`;
