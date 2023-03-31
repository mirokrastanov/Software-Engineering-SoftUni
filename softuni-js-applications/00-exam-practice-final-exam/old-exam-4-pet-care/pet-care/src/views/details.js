import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItem, getItemDetails, getMyLikes, getTotalLikes, likeItem } from '../api/auth.js';

let context = null;
export async function detailsPage(ctx) {
    context = ctx;
    let item = await getItemDetails(ctx.params.id);
    let userData = JSON.parse(localStorage.getItem('userData'));
    let totalLikes = await getTotalLikes(item._id);
    let myLikes = 1;
    if (userData) {
        myLikes = await getMyLikes(item._id);
    }
    ctx.render(detailsTemplate(item, userData, totalLikes, myLikes));
    // ctx.render(detailsTemplate(item, userData)); //=> IF LIKES ARE NEEDED comment this line and use the 6 lines above
}

async function onEdit(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    context.page.redirect(`/edit/${id}`);
}

//=> IF LIKES ARE NEEDED
async function onLike(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    await likeItem(id);
    context.page.redirect(`/details/${id}`);
}

async function onDelete(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    let check = confirm('Are you sure you want to DELETE this Item?');
    if (check) {
        await deleteItem(id);
        context.page.redirect(`/`);
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

//=> FILL Template
//=> FILL the values respectively ${item.ATRname}
//=> SWAP the 2 lines below if LIKES are needed
// const detailsTemplate = (item, userData) => html`
const detailsTemplate = (item, userData, totalLikes, myLikes) => html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src="../${item.image}">
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${item.name}</h1>
                    <h3>Breed: ${item.breed}</h3>
                    <h4>Age: ${item.age}</h4>
                    <h4>Weight: ${item.weight}</h4>
                    <h4 class="donation">Donation: ${totalLikes * 100}$</h4>
                </div>
                ${isLogged(userData) ? html`<div class="actionBtn">
                    ${isOwner(item, userData)
                    ? renderBtns(item._id)
                    : renderLikeBtn(item._id, myLikes)}
                </div>` : null }
            </div>
        </div>
    </section>`;


//=> EDIT & DEL buttons - FILL Template
//=> ADD data-id=${id} @click=${onEdit}   &   data-id=${id} @click=${onDelete}
const renderBtns = (id) => html`
    <a data-id=${id} @click=${onEdit} class="edit">Edit</a>
    <a data-id=${id} @click=${onDelete} class="remove">Delete</a>`;


//=> LIKES MODULE ==> EMBED inside the DETAILS TEMPLATE ABOVE
// <p>Applications: <strong id="applications">${totalLikes}</strong></p>



//=> USE if LIKES are needed
//=> COPY this into the button   data-id=${id} @click=${onLike}
const renderLikeBtn = (id, myLikes) => html`
    ${ myLikes == 0 ?
        html`<a data-id=${id} @click=${onLike} class="donate">Donate</a>`
        : null
    } `;
