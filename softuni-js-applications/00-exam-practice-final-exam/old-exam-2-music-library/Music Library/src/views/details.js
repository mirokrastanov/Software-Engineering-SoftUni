// Meme Details Page ( for Guests and Users )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { deleteAlbum, getAlbumDetailsById, getMyLikes, getTotalLikes, likeAlbum } from '../api/auth.js';

let context = null;
export async function detailsPage(ctx) {
    context = ctx;
    let album = await getAlbumDetailsById(ctx.params.id);
    let userData = JSON.parse(localStorage.getItem('userData'));
    let totalLikes = await getTotalLikes(album._id);
    let myLikes = 1;
    if (userData) {
        myLikes = await getMyLikes(album._id);
    }
    ctx.render(detailsTemplate(album, userData, totalLikes, myLikes));
}

async function onEdit(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    context.page.redirect(`/edit/${id}`);
}

async function onLike(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    await likeAlbum(id);
    context.page.redirect(`/details/${id}`);
}

async function onDelete(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    let check = confirm('Are you sure you want to DELETE this Album?');
    if (check) {
        await deleteAlbum(id);
        context.page.redirect(`/dashboard`);
    }
}

function isOwner(album, userData) {
    if (userData) {
        return album._ownerId == userData._id;
    } else {
        return false;
    }
}

function isLogged(userData) {
    return userData ? true : false;
}

const detailsTemplate = (album, userData, totalLikes, myLikes) => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
                <img src="../..${album.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
                <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
                <p>
                    <strong>Album name:</strong><span id="details-album">${album.album}</span>
                </p>
                <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
                <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
                <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
            </div>
            <div id="likes">Likes: <span id="likes-count">${totalLikes}</span></div>
            ${isLogged(userData)
                ? html` <div id="action-buttons">
                <!--Edit and Delete are only for creator-->
                ${isOwner(album, userData) ? renderBtns(album._id) : renderLikeBtn(album._id, myLikes) }
            </div>` : null
            }
        </div>
    </section>`;

const renderBtns = (id) => html`
    <div id="action-buttons">
        <a data-id=${id} @click=${onEdit} id="edit-btn">Edit</a>
        <a data-id=${id} @click=${onDelete} id="delete-btn">Delete</a>
    </div>`;


const renderLikeBtn = (id, myLikes) => html`
    ${ myLikes == 0 ?
        html`<a data-id=${id} @click=${onLike} id="like-btn">Like</a>`
        : null
    } `;