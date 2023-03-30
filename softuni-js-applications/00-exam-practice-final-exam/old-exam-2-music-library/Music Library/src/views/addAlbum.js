// Create Meme Page ( Only for logged users )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { addNewAlbum, register } from '../api/auth.js';

let context = null;
export async function addPage(ctx) {
    context = ctx;
    ctx.render(createTemplate());
}

async function onCreate(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { singer, album, imageUrl, release, label, sales } = Object.fromEntries(formData);
    try {
        // validation - done
        let invalid = [singer, album, imageUrl, release, label, sales].map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            // console.log('All fields are required!');
            throw new Error('All fields are required!');
        }
        let data = { singer, album, imageUrl, release, label, sales };
        await addNewAlbum(data);
        context.page.redirect(`/dashboard`);
    } catch (error) {
        // console.log(error.message);
        alert(error.message);
    }
}

const createTemplate = () => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />
            <button type="submit">post</button>
        </form>
    </div>
</section>`;
