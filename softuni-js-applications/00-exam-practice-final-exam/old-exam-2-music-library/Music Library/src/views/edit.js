// Edit Meme Page ( Only for logged user and creator to this meme )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { editAlbum, getAlbumDetailsById, register } from '../api/auth.js';

let context = null;
export async function editPage(ctx) {
    context = ctx;
    let album = await getAlbumDetailsById(ctx.params.id);
    ctx.render(editTemplate(album));
}

async function onEdit(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let id = form.dataset.id;
    const formData = new FormData(form);
    const { singer, album, imageUrl, release, label, sales } = Object.fromEntries(formData);
    try {
        // validation - done
        let invalid = [singer, album, imageUrl, release, label, sales].map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            // console.log('All fields are required!');
            throw new Error('All fields are required!');
        }
        let data = { singer, album, imageUrl, release, label, sales };
        await editAlbum(id, data);
        context.page.redirect(`/details/${id}`);
    } catch (error) {
        // console.log(error.message);
        alert(error.message);
    }
}

const editTemplate = (album) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Album</h2>
            <form data-id=${album._id} @submit=${onEdit} class="edit-form">
                <input .value=${album.singer} type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
                <input .value=${album.album} type="text" name="album" id="album-album" placeholder="Album" />
                <input .value=${album.imageUrl} type="text" name="imageUrl" id="album-img" placeholder="Image url" />
                <input .value=${album.release} type="text" name="release" id="album-release" placeholder="Release date" />
                <input .value=${album.label} type="text" name="label" id="album-label" placeholder="Label" />
                <input .value=${album.sales} type="text" name="sales" id="album-sales" placeholder="Sales" />
                <button type="submit">post</button>
            </form>
        </div>
    </section>`;
