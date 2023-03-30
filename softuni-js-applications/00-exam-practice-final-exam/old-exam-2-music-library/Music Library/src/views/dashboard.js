import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllAlbums, register } from '../api/auth.js';


let context = null;
export async function dashboardPage(ctx) {
    context = ctx;
    let allAlbumsArray = await getAllAlbums();
    if (!allAlbumsArray) allAlbumsArray = [];
    // let allAlbumsArray = [];
    ctx.render(allAlbumsTemplate(allAlbumsArray));
}

async function onDetails(e) {
    e.preventDefault();
    let album = e.currentTarget;
    let id = album.dataset.id;
    context.page.redirect(`/details/${id}`);
}

const allAlbumsTemplate = (albums) => html`
<section id="dashboard">
    <h2>Albums</h2>
    <!-- Display a li with information about every post (if any)-->
        ${ albums.length != 0 
        ? html`<ul class="card-wrapper">
        ${Object.values(albums).map(x => albumTemplate(x))}
        </ul>`
        : null
        }
    <!-- Display an h2 if there are no posts -->
        ${ albums.length == 0 
        ? noAlbumsTemplate()
        : null
        }
</section>`;


const albumTemplate = (album) => html`
    <li class="card">
        <img src=".${album.imageUrl}" alt="travis" />
        <p>
            <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
        </p>
        <p>
            <strong>Album name: </strong><span class="album">${album.name}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
        <a class="details-btn" data-id=${album._id} @click=${onDetails}>Details</a>
    </li>`;

const noAlbumsTemplate = () => html`
    <h2> There are no albums added yet.</h2>`;
