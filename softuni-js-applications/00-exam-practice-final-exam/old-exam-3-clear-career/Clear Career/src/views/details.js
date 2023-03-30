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
    let check = confirm('Are you sure you want to DELETE this Album?');
    if (check) {
        await deleteItem(id);
        context.page.redirect(`/dashboard`);
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
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="../${item.imageUrl}" alt="example1" />
        <p id="details-title">${item.title}</p>
        <p id="details-category">
            Category: <span id="categories">${item.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${item.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${item.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${item.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${totalLikes}</strong></p>
        ${isLogged(userData) 
        ? html`<div id="action-buttons">
            ${ isOwner(item, userData)
            ? renderBtns(item._id) // <!--Edit and Delete are only for creator-->
            : renderLikeBtn(item._id, myLikes) //  <!--Bonus - Only for logged-in users ( not authors )-->
            }
        </div>` : null }
    </div>
</section>`;


//=> EDIT & DEL buttons - FILL Template
//=> ADD data-id=${id} @click=${onEdit}   &   data-id=${id} @click=${onDelete}
const renderBtns = (id) => html`
    <a data-id=${id} @click=${onEdit} id="edit-btn">Edit</a>
    <a data-id=${id} @click=${onDelete} id="delete-btn">Delete</a>`;



//=> LIKES MODULE ==> EMBED inside the DETAILS TEMPLATE ABOVE
//         ${isLogged(userData) 
//         ? html`<div id="action-buttons">
//         ${ isOwner(item, userData)
//         ? renderBtns(item._id)
//         : renderLikeBtn(item._id, myLikes)
//         }
//     </div>` : null }


//=> USE if LIKES are needed
const renderLikeBtn = (id, myLikes) => html`
    ${ myLikes == 0 ?
        html`<a data-id=${id} @click=${onLike} id="apply-btn">Apply</a>`
        : null
    } `;