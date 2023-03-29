// Profile Page ( Only for logged users )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getMyMemes } from '../api/auth.js';

let context = null;
export async function myMemesPage(ctx) {
    context = ctx;
    let userData = JSON.parse(localStorage.getItem('userData'));
    let allMyMemes = await getMyMemes();
    if (!allMyMemes) allMyMemes = [];
    // let allMyMemes = [];
    ctx.render(myMemesTemplate(userData, allMyMemes));
}

async function onDetails(e) {
    e.preventDefault();
    let meme = e.currentTarget;
    let id = meme.dataset.id;
    context.page.redirect(`/data/memes/${id}`);
}

const myMemesTemplate = (userData, memes) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src=".${
            userData.gender == 'female' ?
            '/images/female.png' : '/images/male.png'
        }">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${ memes.length != 0 
            // Display : All created memes by this user (If any)
            ? Object.values(memes).map(x => memeCardTemplate(x))
            // Display : If user doesn't have own memes
            : noMemesTemplate()
        }
    </div>
</section>`;

const memeCardTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=".${meme.imageUrl}">
    <a class="button" data-id=${meme._id} @click=${onDetails}>Details</a>
</div>`;

const noMemesTemplate = () => html`
<p class="no-memes">No memes in database.</p>`;
