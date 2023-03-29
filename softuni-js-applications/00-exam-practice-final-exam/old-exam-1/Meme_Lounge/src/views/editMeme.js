// Edit Meme Page ( Only for logged user and creator to this meme )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getMemeDetailsById, updateMemeById } from '../api/auth.js';

let context = null;
export async function editMemePage(ctx) {
    context = ctx;
    let meme = await getMemeDetailsById(ctx.params.id);
    console.log(meme);

    ctx.render(editTemplate(meme));
}

async function onEdit(e) {
    e.preventDefault();
    let form = e.currentTarget.parentElement;
    let id = e.currentTarget.dataset.id;
    let data = {
        title: form.querySelector('input[name=title]').value,
        description: form.querySelector('textarea[name=description]').value,
        imageUrl: form.querySelector('input[name=imageUrl]').value,
    }
    // validation - done
    let invalid = Object.values(data).map(x => x.trim()).filter(x => x == '');
    if (invalid.length == 0) {
        console.log('All fields are required!');
        return;
    }
    await updateMemeById(id, data);
    context.page.redirect(`/data/memes/${id}`);
}

const editTemplate = (meme) => html`
<section id="edit-meme">
    <form id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input .value=${meme.title} id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea .value=${meme.description} id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Image Url</label>
            <input .value=${meme.imageUrl} id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl">
            <input data-id=${meme._id} @click=${onEdit} type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;
