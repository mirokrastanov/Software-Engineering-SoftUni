// Create Meme Page ( Only for logged users )
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { createMeme } from '../api/auth.js';
import { errorHandler } from '../api/error.js';

let context = null;
export async function createMemePage(ctx) {
    context = ctx;
    ctx.render(createTemplate());
}

async function onCreate(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { title, description, imageUrl } = Object.fromEntries(formData);

    try {
        // validation - done
        let invalid = [title, description, imageUrl].map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            // console.log('All fields are required!');
            throw new Error('All fields are required!');
        }
        let data = { title, description, imageUrl };
        await createMeme(data);
        context.page.redirect(`/allMemes`);
    } catch (error) {
        // console.log(error.message);
        errorHandler(error.message);
    }
}


const createTemplate = () => html`
<section id="create-meme">
    <form @submit=${onCreate} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;
