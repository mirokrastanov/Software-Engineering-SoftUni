import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/auth.js';

let contextSpecific = null;
export async function creationPage(ctxAPP) {
    contextSpecific = ctxAPP;
    ctxAPP.render(createLoadout());
}

async function onCreate(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    try {
        let invalid = Object.values(data).map(x => x.trim()).filter(x => x == '');
        if (invalid.length != 0) {
            throw new Error('All fields are required!');
        }
        await createItem(data); 
        contextSpecific.page.redirect(`/dashboard`);
    } catch (error) {
        alert(error.message);
    }
}

const createLoadout = () => html`
    <section id="create">
        <div class="form">
            <h2>Add Fruit</h2>
            <form @submit=${onCreate} class="create-form">
                <input type="text" name="name" id="name" placeholder="Fruit Name" />
                <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
                <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                    cols="50"></textarea>
                <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10"
                    cols="50"></textarea>
                <button type="submit">Add Fruit</button>
            </form>
        </div>
    </section>`;
